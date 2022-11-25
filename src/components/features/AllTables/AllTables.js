import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import { Link } from 'react-router-dom'; 
import { ListGroup, Spinner } from 'react-bootstrap';

const AllTables = () => {

  const tables = useSelector(getAllTables);  
  
  if (tables.length === 0) return (
    <Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  return (
    <section>
      <h1>Browse tables</h1>
      <ListGroup variant="flush">
        {tables.map(table => (
          <ListGroup.Item className="d-flex p-3 justify-content-between my-auto" key={table.id}>
            <div className="d-flex align-items-center my-auto ">
              <h4 className="my-auto p-2">Table {table.id}</h4> 
              <div className="d-flex flex-column flex-sm-row px-2">
                <h6 className="d-flex align-items-center my-auto px-1">Status:</h6>
                <h6 className="d-flex align-items-center my-auto px-1">{table.status}</h6>
              </div>
            </div>
            <Link className="btn btn-primary d-flex align-items-center" to={'table/' + table.id}>Show more</Link>
          </ListGroup.Item>))
        }
        </ListGroup> 
    </section>
  );
}

export default AllTables;