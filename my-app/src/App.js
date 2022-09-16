import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Game from './game';
import DashBoard from './dashBoard';
import Counter from './counter';
import Basket from './Basket';

import { actions } from './store/index'


function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment())
  };
  const decrement = () => {
    dispatch(actions.decrement())
  };
  const addBy = () => {
    dispatch(actions.addBy(10))
  };
  return (
    <div className="row container-fluid">
      <div className="col-sm-5">
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={addBy}>Add By 20</button>
      </div>
      <div className="col-sm-6" align="left">
        <Game />
      </div>
      <div className="col-sm-5">
        <DashBoard />
      </div>
      <div className="col-sm-5">
        <Counter />
      </div>
      <div className="col-sm-5">
        <Basket />
      </div>


    </div>
  );
}

export default App;
