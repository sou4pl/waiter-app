//import styles from './Lists.module.scss';
//import { useSelector } from 'react-redux';
//import { getAllLists } from '../../redux/listsRedux';
import { Link } from 'react-router-dom';

const AllTables = () => {
  
  const tables = [{id: 1}, {id: 2}, {id: 3}, {id: 4},];

  return (
    <section>
      <h2>Browse tables</h2>
      {tables.map(table => (
        <div>
          <Link key={table.id} to={'table/' + table.id}>TABLE {table.id} </Link>
        </div>
      ))}
    </section>
  );
}

export default AllTables;