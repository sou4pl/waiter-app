import AllTables from "./components/pages/AllTables/AllTables";
import Table from "./components/pages/Table/Table";
import Error404 from "./components/pages/Error404/Error404";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";




function App() {
  return (
<main>
  <Container>
    <Header />
      <Routes>
        <Route path="/" element={<AllTables />} />
        <Route path="/table/:tableId" element={<Table />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    <Footer />
  </Container>
        
 </main>
  );
}

export default App;
