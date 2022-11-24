import Table from "../../features/Table/Table"
import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";



const TablePage = () => {

  const { tableId }  = useParams();

  const tableData = useSelector(state => getTableById(state, {tableId}));
  if(!tableData) {
    return (
      <Navigate to="/" />
    )
  }

  return (
    <Table />
  );
};

export default TablePage;