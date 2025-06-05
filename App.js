import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import CreateForm from './components/CreateForm'
import RegisteredForm from './components/RegisteredForm'
import UserProfile from './components/UserProfile'
import './App.css';

const App = () =>(
  <div className='container'>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route exact path='/createNew' Component={CreateForm}/>
      <Route exact path='/registeredUser' Component={RegisteredForm}/>
      <Route exact path='/userProfile' Component={UserProfile}/>
    </Routes>
    </BrowserRouter>
    </div>
  );

export default App;
