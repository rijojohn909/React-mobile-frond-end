import './App.css';
import { Route,Routes } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import Mobile from './components/Mobile';
import View from './components/View';
import Header from './components/Header';
import Admin from './components/Admin';
import Adminmob from './components/Adminmob';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <header><Header/></header>
      <Routes>
        <Route path='' element={<Mobile/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
        <Route path='view/:id' element={<View/>}/>
        <Route path='admins' element={<Admin/>}/>
        <Route path='admin' element={<Adminmob/>}/>

      </Routes>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
