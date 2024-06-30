
import './App.css';
import Signup from './component/Signup.js';
import Login from './component/Login.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DisplayUsers from './component/DisplayUsers.js';
function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<Signup/>}/>
        <Route path='/users' element={<DisplayUsers/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
