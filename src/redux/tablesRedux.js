//selectors
export const getAllTables = state => state.tables
export const getTableById = ({tables}, {tableId}) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const LOCAL_UPDATE_TABLE_DATA = createActionName('LOCAL_UPDATE_TABLE_DATA')

// action creators
export const updateTables = payload => ({type: UPDATE_TABLES, payload});
export const localUpdateTableData = payload => ({type: LOCAL_UPDATE_TABLE_DATA, payload})

export const fetchTables = () => {
  return (dispatch) => { 
    fetch('http://localhost:3131/tables')
      .then (res => res.json())
      .then (tables => dispatch(updateTables(tables)))
  };
};

export const updateTableData = (updatedTableData, id) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...updatedTableData}),
    };
    
    fetch('http://localhost:3131/tables/' + id, options)
    dispatch(localUpdateTableData(updatedTableData))
  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload] 
      case LOCAL_UPDATE_TABLE_DATA:
        return statePart.map(table => (table.id === action.payload.id ? {...action.payload} : table));
    default: 
      return statePart;
  };
};
export default tablesReducer;