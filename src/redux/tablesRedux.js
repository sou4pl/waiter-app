//selectors
export const getAllTables = state => state.tables
export const getTableById = ({tables}, {tableId}) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
export const updateTables = payload => ({type: UPDATE_TABLES, payload});

export const fetchTables = () => {
  return (dispatch) => { 
    fetch('http://localhost:3131/tables')
      .then (res => res.json())
      .then (tables => dispatch(updateTables(tables)))
  };
};

export const updateTableData = (tableId, tableData) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: '2',
        status: tableData.status,
        peopleAmount: tableData.peopleAmount,
        maxPeopleAmount: tableData.maxPeopleAmount,
        bill: tableData.billValue,
      }),
    };
    
    fetch('http://localhost:3131/tables/2', options)
  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload] 
    default: 
      return statePart;
  };
};
export default tablesReducer;