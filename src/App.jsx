import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Warehouse from "./pages/Warehouse/Warehouse";
import WarehouseAdd from "./pages/WarehouseAdd/WarehouseAdd";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit";
import Inventory from "./pages/Inventory/Inventory";
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import InventoryEdit from "./pages/InventoryEdit/InventoryEdit";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_APP_API_URL;

function App() {
  const [inventoryList, setInventoryList] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    fetchInventories();
    fetchWarehouses();
  }, []);

  const fetchInventories = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/Inventories`);
      const transformedData = response.data.map((item) => ({
        itemId: item.id,
        warehouse_name: item.warehouse_name,
        item_name: item.item_name,
        category: item.category,
        status: item.status,
        quantity: item.quantity,
      }));

      setInventoryList(transformedData);
    } catch (error) {
      console.error("Error fetching inventory data: ", error);
    }
  };

  const fetchWarehouses = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/warehouses`);
      setWarehouses(response.data);
      fetchWarehouses();
    } catch (error) {
      console.error(error + "Error fetching warehouse data");
    }
  };

  const handleInventorySubmit = async (data, url, method) => {
    try {
      const response = await axios[method](`${API_URL}${url}`, data);
      fetchInventories();
      return response.data;
    } catch (error) {
      console.error(error + "Error submitting Inventory form data");
    }
  };

  const handleWarehouseSubmit = async (data, url, method) => {
    try {
      const response = await axios[method](`${API_URL}${url}`, data);
      fetchInventories();
      return response.data;
    } catch (error) {
      console.error(error + "Error submitting Warehouse form data");
    }
  };

  const handleDeleteItem = async (itemId) => {
    console.log("Deleting item with id:", itemId);
    try {
      await axios.delete(`${API_URL}/api/inventories/${itemId}`);
      setInventoryList(inventoryList.filter((item) => item.id !== itemId));
      fetchInventories();
    } catch (err) {
      console.error("Failed to delete the inventory:", err);
    }
  };

  const handleWarehouseDelete = async (warehouseId) => {
    try {
      await axios.delete(`${API_URL}/api/warehouses/${warehouseId}`);
      setInventoryList(inventoryList.filter((item) => item.id !== warehouseId));
      fetchInventories();
    } catch (err) {
      console.error("Failed to delete the warehouse:", err);
    }
  };

  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <div className="page-content">
          <Routes>
            <Route
              path="/"
              element={
                <Warehouse
                  warehouses={warehouses}
                  handleWarehouseDelete={handleWarehouseDelete}
                />
              }
            />
            <Route
              path="/add"
              element={
                <WarehouseAdd
                  warehouses={warehouses}
                  handleWarehouseSubmit={handleWarehouseSubmit}
                />
              }
            />
            <Route
              path="/:warehouseId"
              element={<WarehouseDetails warehouses={warehouses} />}
            />
            <Route
              path="/:warehouseId/edit"
              element={
                <WarehouseEdit
                  warehouses={warehouses}
                  handleWarehouseSubmit={handleWarehouseSubmit}
                />
              }
            />
            <Route
              path="/inventory"
              element={
                <Inventory
                  inventoryList={inventoryList}
                  onDeleteItem={handleDeleteItem}
                />
              }
            />
            <Route
              path="/inventory/add"
              element={
                <InventoryAdd
                  warehouses={warehouses}
                  handleInventorySubmit={handleInventorySubmit}
                />
              }
            />
            <Route
              path="/inventory/:itemId"
              element={<InventoryDetails inventoryList={inventoryList} />}
            />
            <Route
              path="/inventory/:itemId/edit"
              element={
                <InventoryEdit
                  warehouses={warehouses}
                  handleInventorySubmit={handleInventorySubmit}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
