import './Warehouse.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import WarehouseList from '../../components/WarehouseList/WarehouseList'
import PageHeader from '../../components/PageHeader/PageHeader'

const API_URL = import.meta.env.VITE_APP_API_URL

const Warehouse = () => {
  const [warehouseList, setWarehouseList] = useState([])

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/warehouses`)
        const transformedData = response.data.map(item => ({
          warehouseId: item.id,
          warehouse_name: item.warehouse_name,
          address: item.address,
          city: item.city,
          country: item.country,
          contact_name: item.contact_name,
          contact_phone: item.contact_phone,
          contact_email: item.contact_email
        }))
        setWarehouseList(transformedData)
      } catch (error) {
        console.error('Error fetching warehouse data: ', error)
      }
    }
    fetchWarehouses()
  }, [])

  return (
    <>
      <PageHeader
        title='Warehouses'
        buttonText='+ Add New Warehouse'
        buttonLink='/add'
      />
      <WarehouseList warehouseList={warehouseList} />
    </>
  )
}

export default Warehouse
