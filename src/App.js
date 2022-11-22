import Home from './components/pages/Home/Home';
import Table from './components/features/Table/Table';
import Error404 from './components/pages/Error404/Error404';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';




function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  
  return (
<main>
  <Container>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:tableId" element={<Table />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    <Footer />
  </Container>
        
 </main>
  );
};

export default App;
