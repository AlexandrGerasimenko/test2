import React from 'react';
import './App.css';
import LoginPage from './components/loginPage'
import Countries from './components/countries'
import CallCenters from './components/callCenters'
import MainPage from './components/mainPage'
import { createBrowserHistory as createHistory } from 'history'
import { Provider } from 'react-redux';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import store from './reducers/index';




const history = createHistory()
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.token
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <Router history={history}>
          <div className='main-wrapper'>
            {/* <Header /> */}
            <div className='content-wraper'>
              {/* <Sider /> */}
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/" component={localStorage.token ? MainPage :LoginPage } exact />
                <PrivateRoute path="/main" exact component={MainPage} />
                <PrivateRoute path="/countries" exact component={Countries} />
                <PrivateRoute path="/callCenters" component={CallCenters} />
                {/* <PrivateRoute path="/cart"  component={CartPage} /> */}
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    </div>
  );
}





// var myHeaders = new Headers();
// // myHeaders.append("Content-Type", "multipart/form-data; boundary=--------------------------140228094062281902434288");

// var formdata = new FormData();
// formdata.append("email", "admin@gmail.com");
// formdata.append("password", "qweqwe");

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("http://react.octarine.com.ua/api/auth/login", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));





export default App;
