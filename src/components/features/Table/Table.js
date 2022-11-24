import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getTableById, updateTableData } from "../../../redux/tablesRedux";
import { Container, Form, Col, Button } from "react-bootstrap";
import { getAllStatusOptions } from "../../../redux/statusOptionsRedux";
import styles from './Table.module.scss';
import { useState } from "react";



const Table = () => {

  const dispatch = useDispatch();
  const { tableId }  = useParams();

  const tableData = useSelector(state => getTableById(state, {tableId}));
  const statusOptions = useSelector(getAllStatusOptions);

  const [status, setStatus] = useState(tableData.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [billValue, setBillValue] = useState(tableData.billValue);
  
  if (peopleAmount > 10){setPeopleAmount(10)};
  if (maxPeopleAmount > 10){setMaxPeopleAmount(10)}
  if (peopleAmount > maxPeopleAmount){setPeopleAmount(maxPeopleAmount)}
  
  const setTableConditionsWithStatus = (e) => {
    if (e === "Busy"){
      setBillValue(0);}
    if (e === "Cleaning" || e === "Free") {
      setPeopleAmount(0);
    }
      setStatus(e);
    }

  const handleSubmit = e => {
    const updatedTableData = {};
    updatedTableData.id = tableId;
    updatedTableData.status = status;
    updatedTableData.peopleAmount = peopleAmount;
    updatedTableData.maxPeopleAmount = maxPeopleAmount;
    updatedTableData.billValue = billValue;
    e.preventDefault();
    console.log(updatedTableData);
    //dispatch(updateTableData(tableId, tableData));
  }
    

  return (
    <div>
      <Container className="p-0">
      <Col sm={3}>
      <h1>Table {tableData.id}</h1>
      <Form className="row">
        <Form.Group className="d-inline-flex my-2 align-items-center">
          <Form.Label className="fw-bold pe-4">Status:</Form.Label>
          <Form.Select 
            value={status} 
            className={styles.input_select} 
            onChange={e => setTableConditionsWithStatus(e.target.value)}>
            {statusOptions.map((statusOption) => (
            <option key={statusOption}>{statusOption}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="d-inline-flex my-2 align-items-center">
          <Form.Label className="fw-bold pe-4">People:</Form.Label>
          <Form.Control 
            type="number" 
            value={peopleAmount} 
            className={styles.input} 
            onChange={e => setPeopleAmount(e.target.value)}
          />
          <span className="px-2">/</span>
          <Form.Control 
            type="number" 
            value={maxPeopleAmount} 
            className={styles.input} 
            onChange={e => setMaxPeopleAmount(e.target.value)}
          />
        </Form.Group>
          {status === "Busy" ? (
          <div>
            <Form.Group className="d-inline-flex my-2 align-items-center">
              <Form.Label className="fw-bold d-inline-flex">Bill: <span className="fw-normal ps-4 pe-1">$</span></Form.Label>
            <Form.Control 
              type="number" 
              value={billValue} 
              className={styles.input} 
              onChange={e => setBillValue(e.target.value)} 
            />
            </Form.Group>
          </div>
          ) : null}
      </Form>
      <Button className="mt-2" onClick={e =>{handleSubmit(e)}}>Update</Button>
      </Col>
    </Container>
    </div>
  );
};

export default Table;