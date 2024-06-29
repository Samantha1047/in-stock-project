import "./Inventory.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import PageHeader from '../../components/PageHeader/PageHeader';

const Inventory = ({ inventoryList, onDeleteItem }) => {

  return (
    <main className="inventory">
      <PageHeader title='Inventory' link='/inventory/add' buttonTitle='+ Add New Item' />
      <InventoryList
        showWarehouse={true}
        inventoryList={inventoryList}
        onDeleteItem={onDeleteItem}
      />
    </main>
  );
};

export default Inventory;
