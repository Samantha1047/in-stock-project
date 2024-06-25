import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./pages/Warehouse/Warehouse";
import WarehouseAdd from "./pages/WarehouseAdd/WarehouseAdd";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit";
import Inventory from "./pages/Inventory/Inventory";
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import InventoryEdit from "./pages/InventoryEdit/InventoryEdit";

import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Warehouse />} />
          <Route path="/add" element={<WarehouseAdd />} />
          {/* remember to change warehouseId to :warehouseId when we have the data */}
          <Route path="/warehouseId" element={<WarehouseDetails />} />
          <Route path="/warehouseId/edit" element={<WarehouseEdit />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/add" element={<InventoryAdd />} />
          {/* remember to change item to :itemId when we have the data */}
          <Route path="/inventory/item" element={<InventoryDetails />} />
          <Route path="/inventory/item/edit" element={<InventoryEdit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
