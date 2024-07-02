import "./Warehouse.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import PageHeader from '../../components/PageHeader/PageHeader'

const Warehouse = ({ warehouses, handleWarehouseDelete }) => {

  return (
    <main className="warehouse">
      <PageHeader title='Warehouse' link='/add' buttonTitle='+ Add New Warehouse' />
      <WarehouseList
        warehouses={warehouses}
        handleWarehouseDelete={handleWarehouseDelete}
      />
    </main>
  );
};

export default Warehouse;
