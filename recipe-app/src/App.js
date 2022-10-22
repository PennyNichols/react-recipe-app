import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<h1>Home</h1>}/>
        <Route path='/about' element={<h1>About</h1>}/>
        <Route path='/github' element={<h1>GitHub</h1>} />
      </Routes>
    </>
  );
}

export default App;
