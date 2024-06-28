import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import editIcon from '../../assets/icons/edit-24px.svg'
import chevRight from '../../assets/icons/chevron_right-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import searchIcon from '../../assets/icons/search-24px.svg'
import sortIcon from '../../assets/icons/sort-24px.svg'
import DeleteModal from '../DeleteModal/DeleteModal'
import './WarehouseList.scss'

const API_URL = import.meta.env.VITE_APP_API_URL

const WarehouseList = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [warehouseList, setWarehouseList] = useState([])
  const [currentWarehouse, setcurrentWarehouse] = useState('')
  const [currentWarehouseId, setcurrentWarehouseId] = useState('')

  const navigate = useNavigate()

  const handleClick = (name, id) => {
    setModalOpen(true)
    setcurrentWarehouse(name)
    setcurrentWarehouseId(id)
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/api/warehouses/${currentWarehouseId}`)
      setWarehouseList(
        warehouseList.filter(
          warehouse => warehouse.warehouseId !== currentWarehouseId
        )
      )
      setModalOpen(false)
    } catch (err) {
      console.error('Failed to delete the warehouse:', err)
    }
  }

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
    <section className='warehouse-list'>
      <div className='warehouse-list__table'>
        <div className='warehouse-list__table-headers warehouse-list__table-headers--hidden'>
          <div className='warehouse-list__header-column'>
            <p>Warehouse</p>
            <img
              className='warehouse-list__sort-icon'
              src={sortIcon}
              alt='sort icon'
            />
          </div>
          <div className='warehouse-list__header-column'>
            <p>Address</p>
            <img
              className='warehouse-list__sort-icon'
              src={sortIcon}
              alt='sort icon'
            />
          </div>
          <div className='warehouse-list__header-column'>
            <p>ContactName</p>
            <img
              className='warehouse-list__sort-icon'
              src={sortIcon}
              alt='sort icon'
            />
          </div>
          <div className='warehouse-list__header-column'>
            <p>Contact Information</p>
            <img
              className='warehouse-list__sort-icon'
              src={sortIcon}
              alt='sort icon'
            />
          </div>
          <div className='warehouse-list__header-column warehouse-list__header-column--actions'>
            <p>Actions</p>
            <img
              className='warehouse-list__sort-icon'
              src={sortIcon}
              alt='sort icon'
            />
          </div>
        </div>
        <div>
          {warehouseList.map(item => {
            const {
              warehouseId,
              warehouse_name,
              address,
              city,
              country,
              contact_name,
              contact_phone,
              contact_email
            } = item
            return (
              <article key={warehouseId} className='warehouse-list__table-row'>
                <div className='warehouse-list__information'>
                  <div className='warehouse-list__table-cell--left'>
                    <div className='warehouse-list__table-cell warehouse-list__table-cell--tablet'>
                      <p className='warehouse-list__header--mobile'>
                        WAREHOUSE
                      </p>
                      <Link
                        to={`${warehouseId}`}
                        className='warehouse-list__link'
                      >
                        <p> {warehouse_name}</p>
                        <img
                          className='warehouse-list__chevron'
                          src={chevRight}
                          alt='chevron right icon'
                        />
                      </Link>
                    </div>
                    <div className='warehouse-list__table-cell'>
                      <p className='warehouse-list__header--mobile'>ADDRESS</p>
                      <p className='warehouse-list__item'>
                        {address}, {city}, {country}
                      </p>
                    </div>
                  </div>
                  <div className='warehouse-list__table-cell--right'>
                    <div className='warehouse-list__table-cell'>
                      <p className='warehouse-list__header--mobile'>
                        CONTACT NAME
                      </p>
                      <p className='warehouse-list__item'>{contact_name}</p>
                    </div>
                    <div className='warehouse-list__table-cell'>
                      <p className='warehouse-list__header--mobile'>
                        CONTACT INFORMATION
                      </p>
                      <p className='warehouse-list__item'>{contact_phone}</p>
                      <p className='warehouse-list__item'>{contact_email}</p>
                    </div>
                  </div>
                </div>

                <div className='warehouse-list__table-cell--bottom'>
                  <button
                    className='warehouse-list__delete-button'
                    onClick={() => handleClick(warehouse_name, warehouseId)}
                  >
                    <img src={deleteIcon} alt='Delete' />
                  </button>
                  <button
                    onClick={() => navigate(`/${warehouseId}/edit`)}
                    className='warehouse-list__edit-button'
                  >
                    <img src={editIcon} alt='Edit' />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
      <DeleteModal
        isWarehouse={true}
        name={currentWarehouse}
        onClose={() => setModalOpen(false)}
        onConfirmDelete={handleDelete}
        isActive={isModalOpen}
      />
    </section>
  )
}

export default WarehouseList
