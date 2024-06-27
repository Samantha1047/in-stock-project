import "./Warehouse.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import PageHeader from '../../components/PageHeader/PageHeader'

const Warehouse = () => {
  return (
    <>
      <PageHeader
        title="Warehouses"
        buttonText="+ Add New Warehouse"
        buttonLink="/add"
      />
      {/* <WarehouseList /> */}
    </>
  )
};

export default Warehouse;
