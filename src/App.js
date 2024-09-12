
import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategory from './Components/Filter/AllCategory';

function App() {
  return (
    <div className="App">
      <div className='block'>
      <AllCategory />
      <Cart/>
      </div>
      <div className='block'>
      <Dishes />
      </div>
    </div>
  );
}

export default App;
