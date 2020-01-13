import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCountries } from '../actions/countries';



// import { Redirect } from 'react-router';
// import {Link } from 'react-router-dom';



// var myHeaders = new Headers();
//         myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZWFjdC5vY3RhcmluZS5jb20udWFcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1Nzg1MTM5MTIsIm5iZiI6MTU3ODUxMzkxMiwianRpIjoia0JWZFhMd0ExREY1cmVuUyIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.8JeFlcu08C7e8zL7ClR-NPT8MrcuZt0gwKc0pRP8Z9M");
//         myHeaders.append("X-Requested-With", "XMLHttpRequest");
        
//         var formdata = new FormData();
//         formdata.append("content_type", "country");
//         formdata.append("action", "view");
        
//         var requestOptions = {
//           method: 'POST',
//           headers: myHeaders,
//           body: formdata,
//           redirect: 'follow'
//         };

  
// const SignUp = () => (
//   <div classemail="log-wrapper flex">
//     <div classemail="container">
//       <div >
//         Войдите или авторизируйтесь
//       </div>
//       <div>
//         <div>E-mail</div>
//         <div> <input></input> </div>
//       </div>
//       <div>
//         <div>Password</div>
//         <div><input></input></div>
//       </div>
//       <div><button onClick = {() => auth()}>Вход</button></div>
//     </div>
//   </div>
// );


class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '', valid: false, redirectToReferrer: false }
    this.handleReg = this.handleReg.bind(this)
    this.handleSend = this.handleSend.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.validate = this.validate.bind(this);
    this.p = props
  }
  validate(state) {
    return {
      valid: state.email.length > 0 && state.password.length

    }
  }
  validate(state) {
    return {
      valid: state.email.length > 0 && state.password.length

    }
  }
  handleChange(e) {
    this.setState({ email: e.target.value })
    this.setState(this.validate)
  }

  handleChange2(e) {
    this.setState({ password: e.target.value })
    this.setState(this.validate)
  }

  handleSend(props) {
    var formdata = new FormData();
formdata.append("email",
"admin@gmail.com"
// this.state.email
 );
formdata.append("password",
"qweqwe"
// this.state.password
);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

 fetch("http://react.octarine.com.ua/api/auth/login", requestOptions)
  .then(response => response.text())
    .then(response => JSON.parse(response))
      .then(result => localStorage.setItem('token',result.data.access_token),
      this.setState(() => ({
        redirectToReferrer: true
      }
      )
      )
      )
      .then(this.props.onGetCountries)
        .then(console.log('ok'))
        
          .catch(error => console.log('error', error));
    // store.dispatch(graphqlTokenThunk(this.state.email, this.state.password))
    //   .then(console.log(this.props))
    //   .then(() => !this.props.log[0][0] ?
    //     document.getElementById('wrong').style.display = 'flex':
    //     (localStorage.authToken = this.props.log[0][0],
    //       this.setState(() => ({
    //         redirectToReferrer: true
    //       }
    //       )
    //       )
    //     )
    //   )
  }

  handleReg(props) {
//     store.dispatch(graphqlRegLog
//       (this.state.email, this.state.password))
//       .then(
// store.dispatch(graphqlTokenThunk(this.state.email, this.state.password))
//           .then(console.log(this.props))
//           .then(() => !this.props.log[0][0] ?
//             alert("Wrong pass") :
//             (localStorage.authToken = this.props.log[0][0],
//               this.setState(() => ({
//                 redirectToReferrer: true
//               }
//               )
//               )
//             )
//           )
//       )
  }
  render() {
    const { from } = this.props.location.state || { from: { pathemail: '/countries' } }
    const { redirectToReferrer } = this.state
    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div classemail="log-wrapper flex">
     <div>
            <input value={this.state.email}
              // type = 'password'
              onChange={this.handleChange}
              style={{ backgroundColor: this.state.valid ? '' : '#f99', type: 'password' }}
            />
            <input value={this.state.password}
              onChange={this.handleChange2}
              style={{ backgroundColor: this.state.valid ? '' : '#f99' }}
            />
            <button id = 'log'
              disabled={!this.state.valid}
              onClick={this.handleSend}
            >Log in</button>

            <br />
          
          </div>
    </div>
    );
  }
}



export default connect(
  state => ({
    countries: state.countries
  }),
  dispatch => ({
    onGetCountries: () => {
      dispatch(getCountries());
    }
  })
)(SignUp);



