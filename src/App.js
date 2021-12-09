import './App.scss';
import LoginForm from './scenes/user/Login/LoginForm';
import { BrowserRouter as Br, Route } from 'react-router-dom';
import { Switch } from 'react-router'
import RegisterForm from './scenes/user/Register/RegisterForm';
import Dashboard from './scenes/views/Dashboard/Dashboard';
import { TaskView } from './scenes/views/taskview/TaskView';
import { Task } from './scenes/views/Task/Task';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase/firebase';
import { setAuth, setUser } from './redux/userReducer';
import LoginGaurd from './guards/LoginGaurd';
import Homepage from './scenes/landing-page/homepage/Homepage';
import BoardTab from './scenes/views/get-started/BoardTab';
import GetStarted from './scenes/views/get-started/GetStarted';
import Features from './scenes/landing-page/Features/Features';
import ToDoapp from './scenes/landing-page/ToDoapp/ToDoapp';
import Todo from './scenes/views/TodoList/Todo';
import FeaturesMobile from './scenes/landing-page/FeaturesMobile/FeaturesMobile';
function App() {

  //Check user is logged or not to pass as props in protected routes
  const dispatch = useDispatch();
  const isLogged = useSelector(state=>state.auth)

  //Check after app render if user is logged from last session or not
  onAuthStateChanged(auth , (currentUser)=>{
    if(currentUser){
      dispatch(setUser(currentUser));
      dispatch(setAuth(true))
    }
  })
  return (
    <>
    <Br>
    {/* <DndProvider backend={HTML5Backend}>
    <BoardHeader/>
    <BoardHome/>
    <ListView/>
     </DndProvider> */}
      <Switch>
          <Route component={Homepage} path="/" exact></Route>
          <Route component={ToDoapp} path="/ToDoapp"></Route>
          <Route component={LoginForm} path="/login"></Route>
          <Route component={RegisterForm} path="/register"></Route>
          <Route component={Dashboard} path="/dashboard"></Route>
          <Route component={Todo} path="/todo"></Route>
          <Route component={TaskView} path="/taskview"></Route>
          <Route component={Features} path="/feature"></Route>
          <Route component={Features} path="/feature"></Route>
          <Route component={FeaturesMobile} path="/featuremobile"></Route>

          <Route component={Task} path="/task"></Route>
          <Route component= {GetStarted} path ="/get-started"></Route>
          <Route component={BoardTab} path ="/project/:id"></Route>
          <LoginGaurd Comp={LoginForm} path="/login" exact isLogged={isLogged}/>
          <LoginGaurd Comp={RegisterForm} path="/register" exact isLogged={isLogged}/>
          <LoginGaurd Comp={Dashboard} path="/dashboard" exact isLogged={!isLogged}/>
      </Switch>
    </Br>
    </>
  );
}

export default App;
