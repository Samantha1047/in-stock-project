import './PageHeader.scss'
import { useNavigate } from 'react-router-dom'
import searchIcon from '../../assets/icons/search-24px.svg'

const PageHeader = ({ title, buttonText, buttonLink }) => {
    const navigate = useNavigate()

    return (
        <section className='page-header'>
            <div className='page-header__header'>
                <h1 className='page-header__title'>{title}</h1>
                <div>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='page-header__search'
                    />
                    <img
                        className='page-header__search-icon'
                        src={searchIcon}
                        alt='search icon'
                    />
                    <button
                        onClick={() => navigate(buttonLink)}
                        className='page-header__button'
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PageHeader
