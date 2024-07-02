import "./WarehouseDetails.scss";
import WarehouseDetail from "../../components/WarehouseDetail/WarehouseDetail";
import InventoryList from "../../components/InventoryList/InventoryList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_APP_API_URL;

const WarehouseDetails = () => {
  const { warehouseId } = useParams();
  const [inventoryList, setInventoryList] = useState([]);

  useEffect(() => {
    fetchWarehouseInventory();
  }, [warehouseId]);

  const fetchWarehouseInventory = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/warehouses/${warehouseId}/inventories`
      );
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
      console.error("Error fetching warehouse inventory data: ", error);
    }
  };

  const handleDeleteItem = async (itemId, warehouseId) => {
    try {
      await axios.delete(`${API_URL}/api/inventories/${itemId}`);
      fetchWarehouseInventory(warehouseId);
    } catch (err) {
      console.error("Failed to delete the inventory:", err);
    }
  };

  return (
    <main className="warehouse-details">
      <WarehouseDetail />
      <InventoryList
        inventoryList={inventoryList}
        showWarehouse={false}
        onDeleteItem={handleDeleteItem}
      />
    </main>
  );
};

export default WarehouseDetails;
