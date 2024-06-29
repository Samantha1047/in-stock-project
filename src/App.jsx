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
  useEffect(() => {
    fetchInventories();
  }, []);
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

  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Warehouse />} />
            <Route path="/add" element={<WarehouseAdd />} />
            <Route path="/:warehouseId" element={<WarehouseDetails />} />
            <Route path="/:warehouseId/edit" element={<WarehouseEdit />} />
            <Route path="/inventory/add" element={<InventoryAdd />} />
            <Route path="/inventory/:itemId/edit" element={<InventoryEdit />} />
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
              path="/inventory/:itemId"
              element={<InventoryDetails inventoryList={inventoryList} />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
