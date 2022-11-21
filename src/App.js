import AllTables from "./components/pages/AllTables/AllTables";
import Table from "./components/pages/Table/Table";
import Error404 from "./components/pages/Error404/Error404";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
<main>
        <Routes>
          <Route path="/" element={<AllTables />} />
          <Route path="/table/:tableId" element={<Table />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
 </main>
  );
}

export default App;
