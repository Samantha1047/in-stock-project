import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./Pages/Warehouse/Warehouse";
import WarehouseAdd from "./Pages/WarehouseAdd/WarehouseAdd";
import WarehouseDetails from "./Pages/WarehouseDetails/WarehouseDetails";
import WarehouseEdit from "./Pages/WarehouseEdit/WarehouseEdit";
import Inventory from "./Pages/Inventory/Inventory";
import InventoryAdd from "./Pages/InventoryAdd/InventoryAdd";
import InventoryDetails from "./Pages/InventoryDetails/InventoryDetails";
import InventoryEdit from "./Pages/InventoryEdit/InventoryEdit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Warehouse />} />
          <Route path="/add" element={<WarehouseAdd />} />
          <Route path="/:warehouseId" element={<WarehouseDetails />} />
          <Route path="/:warehouseId/edit" element={<WarehouseEdit />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/add" element={<InventoryAdd />} />
          <Route path="/inventory/:itemId" element={<InventoryDetails />} />
          <Route path="/inventory/:itemId/edit" element={<InventoryEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
