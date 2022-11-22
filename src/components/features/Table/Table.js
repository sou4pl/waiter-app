import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";
import { Form } from "react-bootstrap";


const Table = () => {

  const { tableId }  = useParams();
  console.log({tableId});
  const tableData = useSelector(state => getTableById(state, {tableId}));
  console.log(tableData);

  return (
    <div>
      <h2>Table {tableData.id}</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Table;