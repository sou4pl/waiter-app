import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";
import { Container, Form, Col, Button } from "react-bootstrap";
import { getAllStatuses } from "../../../redux/statusesRedux";
import styles from './Table.module.scss';
import clsx from "clsx";
import { useEffect, useState } from "react";


const Table = () => {

  const { tableId }  = useParams();

  const tableData = useSelector(state => getTableById(state, {tableId}));
  const statuses = useSelector(getAllStatuses);
  //console.log(statuses)
  //console.log(tableData)

  const [status, setStatus] = useState('');
  const [peopleAmount, setPeopleAmount] = useState('');
  const [maxPeopleAmount, setMaxPeopleAmount] = useState('');
  const [billValue, setBillValue] = useState('');

  //if(!tableData) {
  //  return (
  //    <Navigate to="/" />
  //  )
  

  return (
    <div>
      <Container className="p-0">
      <Col sm={3}>
      <h1>Table {tableData.id}</h1>
      <Form className="row">
        <Form.Group className="d-inline-flex my-2 align-items-center">
          <Form.Label className="fw-bold pe-4">Status:</Form.Label>
          <Form.Select value="status" className={styles.input_select} onChange={e => setStatus(e.target.value)}>
            <option>{status}</option>
            {statuses.map((statusOption) => (
            status !== statusOption ? <option key={statusOption}>{statusOption}</option> : ''
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="d-inline-flex my-2 align-items-center">
          <Form.Label className="fw-bold pe-4">People:</Form.Label>
          <Form.Control type="number" value={peopleAmount} className={styles.input} onChange={e => setPeopleAmount(e.target.value)}/>
            <span className="px-2">/</span>
          <Form.Control type="number" value={maxPeopleAmount} className={styles.input} onChange={e => setMaxPeopleAmount(e.target.value)}/>
        </Form.Group>
          <div className={clsx(tableData.status !== "Busy" && styles.hidden_input)} >
            <Form.Group className="d-inline-flex my-2 align-items-center">
              <Form.Label className="fw-bold d-inline-flex">Bill: <span className="fw-normal ps-4 pe-1">$</span></Form.Label>
            <Form.Control type="number" value={billValue} className={styles.input} onChange={e => setBillValue(e.target.value)} />
            </Form.Group>
          </div>
      </Form>
      <Button className="mt-2" type="submit">Update</Button>
      </Col>
    </Container>
    </div>
  );
};

export default Table;