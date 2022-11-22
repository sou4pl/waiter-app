import { useParams } from "react-router-dom";

const Table = () => {

  const { tableId } = useParams();
  return (
    <h2>TABLE {tableId} PAGE</h2>
  );
};

export default Table;