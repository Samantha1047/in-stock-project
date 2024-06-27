import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import editIcon from '../../assets/icons/edit-24px.svg'
import chevRight from '../../assets/icons/chevron_right-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import searchIcon from '../../assets/icons/search-24px.svg'
import sortIcon from '../../assets/icons/sort-24px.svg'
import Button from '../Button/Button'
import './InventoryList.scss'

const API_URL = import.meta.env.VITE_APP_API_URL

const InventoryList = () => {
    const [inventoryList, setInventoryList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchInventorys = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/inventories`)
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
                console.error('Error fetching inventory data: ', error)
            }
        }
        fetchInventorys()
    }, [])

    const tableHeaders = [
        'INVENTORY NAME',
        'CATEGORY',
        'STATUS',
        'QTY',
        'WAREHOUSE',
        'ACTIONS'
    ]

    return (
        <section className='inventory-list'>
            <div className='inventory-list__header'>
                <h1 className='inventory-list__title'>Inventory</h1>
                <div>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='inventory-list__search'
                    />
                    <img
                        className='inventory-list__search-icon'
                        src={searchIcon}
                        alt='search icon'
                    />
                    <button
                        onClick={() => navigate(`/inventory/add`)}
                        className='inventory-list__button'
                    >
                        + Add New Item
                    </button>
                </div>
            </div>
            <div className='inventory-list__table'>
                <div className='inventory-list__table-headers inventory-list__table-headers--hidden'>
                    {tableHeaders.map((header, index) => (
                        <div key={index} className='inventory-list__header-column'>
                            <p>{header}</p>
                            <img
                                className='inventory-list__sort-icon'
                                src={sortIcon}
                                alt='sort icon'
                            />
                        </div>
                    ))}
                </div>
                <div>
                    {inventoryList.map(item => {
                        const {
                            itemId,
                            warehouse_name,
                            item_name,
                            category,
                            status,
                            quantity,
                        } = item

                        return (
                            <article
                                key={itemId}
                                className='inventory-list__table-row'
                            >
                                <div className='inventory-list__information'>
                                    <div className='inventory-list__table-cell--left'>
                                        <div className='inventory-list__table-cell inventory-list__table-cell--tablet'>
                                            <p className='inventory-list__header--mobile'>
                                                INVENTORY ITEM
                                            </p>
                                            <Link
                                                to={`/inventory/${itemId}`}
                                                className='inventory-list__link'
                                            >
                                                <p> {item_name}</p>
                                                <img
                                                    className='inventory-list__chevron'
                                                    src={chevRight}
                                                    alt='chevron right icon'
                                                />
                                            </Link>
                                        </div>
                                        <div className='inventory-list__table-cell'>
                                            <p className='inventory-list__header--mobile'>CATEGORY</p>
                                            <p className='inventory-list__item'>
                                                {category}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='inventory-list__table-cell--right'>
                                        <div className='inventory-list__table-cell'>
                                            <p className='inventory-list__header--mobile'>
                                                STATUS
                                            </p>
                                            <p className={`inventory-list__item inventory-list__item--status ${status === 'In Stock' ? 'inventory-list__item--green' : 'inventory-list__item--red'}`}>{status}</p>
                                        </div>
                                        <div className='inventory-list__table-cell'>
                                            <p className='inventory-list__header--mobile'>
                                                QTY
                                            </p>
                                            <p className='inventory-list__item'>{quantity}</p>
                                        </div>
                                        <div className='inventory-list__table-cell'>
                                            <p className='inventory-list__header--mobile'>
                                                WAREHOUSE
                                            </p>
                                            <p className='inventory-list__item'>{warehouse_name}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='inventory-list__table-cell--bottom'>
                                    {/* // may need to adjust when delete modal is completed  */}
                                    <button className='inventory-list__delete-button'>
                                        <img
                                            onClick={() => navigate(`inventory/${itemId}/delete`)}
                                            src={deleteIcon}
                                            alt='Delete'
                                        />
                                    </button>
                                    <button
                                        onClick={() => navigate(`/inventory/${itemId}/edit`)}
                                        className='inventory-list__edit-button'
                                    >
                                        <img src={editIcon} alt='Edit' />
                                    </button>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default InventoryList
