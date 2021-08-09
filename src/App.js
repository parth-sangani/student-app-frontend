import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ViewAllStudents from './components/ViewAllStudents';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Router>
      <ToastContainer />
    <Header />

    <Route path="/" component={Home} exact />
    <Route path="/add-student" component={AddStudent} exact />
    <Route path="/view-all" component={ViewAllStudents} exact />
    <Route path="/update-student/:id" component={UpdateStudent} exact />

    </Router>
  );
}

export default App;
