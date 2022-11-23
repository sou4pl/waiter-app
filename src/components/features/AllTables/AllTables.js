import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import { Link } from 'react-router-dom'; 
import { ListGroup } from 'react-bootstrap';

const AllTables = () => {

  const tables = useSelector(getAllTables);  
  console.log(tables)

  if (tables.length === 0) return (<p>LOADING! </p>) 

  return (
    <section>
      <h1>Browse tables</h1>
      <ListGroup variant="flush">
        {tables.map(table => (
          <ListGroup.Item className="d-flex p-3 justify-content-between my-auto" key={table.id}>
            <div className="d-flex align-items-center my-auto">
              <h2 className="my-auto">Table {table.id}</h2> 
              <h6 className="d-flex align-items-center my-auto p-3">Status: {table.status}</h6>
            </div>
            
            <Link className="btn btn-primary d-flex align-items-center" to={'table/' + table.id}>Show more</Link>
          </ListGroup.Item>))
        };
        </ListGroup> 
    </section>
  );
}

export default AllTables;