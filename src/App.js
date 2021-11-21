import './App.css';
import LoginForm from './scenes/user/Login/LoginForm';
import {Header} from './scenes/landing-page/header/Header'
import { BrowserRouter as Br, Route } from 'react-router-dom';
import { Switch } from 'react-router'
import RegisterForm from './scenes/user/Register/RegisterForm';
import { Home } from './scenes/landing-page/home/Home';
import Dashboard from './scenes/views/Dashboard/Dashboard';
import { TaskView } from './scenes/views/taskview/TaskView';
import { Task } from './scenes/views/Task/Task';

import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase/firebase';
import { setAuth, setUser } from './redux/userReducer';
import LoginGaurd from './guards/LoginGaurd';

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
      <Header/>
      {/* <ViewsComp/> */}
      <Switch>
          <Route component={Home} path="/" exact></Route>
          <Route component={LoginForm} path="/login"></Route>
          <Route component={RegisterForm} path="/register"></Route>
          <Route component={Dashboard} path="/dashboard"></Route>
          <div className="route">
            <Route component={TaskView} path="/taskview"></Route>
            <Route component={Task} path="/task"></Route>
          </div>
          <LoginGaurd Comp={LoginForm} path="/login" exact isLogged={isLogged}/>
          <LoginGaurd Comp={RegisterForm} path="/register" exact isLogged={isLogged}/>
          
          {/* <Route component={Teams} path="/teams"></Route> */}
          {/* <Route component={CountUpComp} path="/counter"></Route>
          <Route component={PricingSwitch} path="/pricing"></Route> */}
      </Switch>
    </Br>
    </>
  );
}

export default App;
