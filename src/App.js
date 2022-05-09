import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import AppFilter from './components/app-filter/app-filter';
import EmployeesList from './components/employees-list/employees-list';
import EmployeesAddForm from './components/employees-add-form/employees-add-form';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList/>

      <EmployeesAddForm/>
    </div>
  );
}

export default App;
