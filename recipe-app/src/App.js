import {Routes, Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/github' element={<h1>GitHub</h1>} />
      </Routes>
    </>
  );
}

export default App;
