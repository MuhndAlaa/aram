import './App.css';
import LoginForm from './scenes/user/Login/LoginForm';
import {Header} from './scenes/landing-page/header/Header'
import { BrowserRouter as Br, Route } from 'react-router-dom';
import { Switch } from 'react-router'
import RegisterForm from './scenes/user/Register/RegisterForm';
import { Home } from './scenes/landing-page/home/Home';
import { ViewsComp } from './scenes/views/viewsComp/ViewsComp';
import { TaskView } from './scenes/views/taskview/TaskView';
import { Task } from './scenes/views/Task/Task';


function App() {
  return (
    <>
    <Br>
      <Header/>
      {/* <ViewsComp/> */}
      <Switch>
          <Route component={Home} path="/" exact></Route>
          <Route component={LoginForm} path="/login"></Route>
          <Route component={RegisterForm} path="/register"></Route>
          <Route component={ViewsComp} path="/views"></Route>
          <div className="route">
            <Route component={TaskView} path="/taskview"></Route>
            <Route component={Task} path="/task"></Route>
          </div>
      </Switch>
    </Br>
    </>
  );
}

export default App;
