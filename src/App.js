import './App.css';
import LoginForm from './scenes/user/Login/LoginForm';
import {Header} from './scenes/landing-page/header/Header'
import { BrowserRouter as Br, Route } from 'react-router-dom';
import { Switch } from 'react-router'
import RegisterForm from './scenes/user/Register/RegisterForm';
import { Home } from './scenes/landing-page/home/Home';

function App() {
  return (
    <>
    <Br>
      <Header/>
      <Switch>
          <Route component={Home} path="/" exact></Route>
          {/* <Route component={Teams} path="/teams"></Route> */}
          <Route component={LoginForm} path="/login"></Route>
          <Route component={RegisterForm} path="/register"></Route>
          {/* <Route component={CountUpComp} path="/counter"></Route>
          <Route component={PricingSwitch} path="/pricing"></Route> */}
      </Switch>
    </Br>
    </>
  );
}

export default App;
