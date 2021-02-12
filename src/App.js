import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import UserList from './Components/UserList';
import { getUserAC, addRetingListAC } from './redux/actionCreators';
import SortIcon from './Components/SortIcon';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('hello, world!');
    fetch('https://my-json-server.typicode.com/Decidophobia/demo/users')
      .then((res) => res.json())
      .then((res) => {
        dispatch(getUserAC(res));
        dispatch(addRetingListAC(res));
      });
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <div className="header">
          <h1 className="header__title">Рейтинг пользователей:</h1>
          <SortIcon className="header_btn" />
        </div>
      </header>
      <UserList />
    </div>
  );
}

export default App;
