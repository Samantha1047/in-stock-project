import "./WarehouseDetails.scss";
import WarehouseDetail from "../../components/WarehouseDetail/WarehouseDetail";
import InventoryList from '../../components/InventoryList/InventoryList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API_URL = import.meta.env.VITE_APP_API_URL

const WarehouseDetails = () => {
  const { warehouseId } = useParams();
  const [inventoryList, setInventoryList] = useState([])

  useEffect(() => {
    const fetchWarehouseInventory = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/warehouses/${warehouseId}/inventories`);
        const transformedData = response.data.map(item => ({
          itemId: item.id,
          warehouse_name: item.warehouse_name,
          item_name: item.item_name,
          category: item.category,
          status: item.status,
          quantity: item.quantity
        }))

        setInventoryList(transformedData)
      } catch (error) {
        console.error('Error fetching warehouse inventory data: ', error)
      }
    }
    fetchWarehouseInventory()
  }, [warehouseId])

  return (
    <main>
      <WarehouseDetail />
      <InventoryList inventoryList={inventoryList} showWarehouse={false} />
    </main>
  );
};

export default WarehouseDetails;
