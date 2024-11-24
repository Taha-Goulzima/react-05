import './App.css';
import { useSelector ,useDispatch} from 'react-redux';
import { increment } from './action/index';
import { decrement } from './action/index';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>hello{counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {isLogged? <h2>Logged in</h2> : <h2>Not logged in</h2>}
    </div>
  );
}

export default App;
