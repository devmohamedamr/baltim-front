// import logo from './logo.svg';
import './App.css';
// import Counter from './Counter';
// import Home from './Home';
import { Outlet  ,Link} from 'react-router-dom';
function App() {
  return (
    <>
      <div>
        <Link to='home'>home</Link>
        <Link to='about'>about</Link>
        <Link to='contact'>contact</Link>
        <Link to='form'>form</Link>

      </div>
      
      <Outlet />
      
    </>
  );
}

export default App;
