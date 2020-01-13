import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getCallCenter } from '../actions/callCenters';
import { connect } from 'react-redux'
import { getCountries } from '../actions/countries';
import AddCallcenter from './addCAllCenters'


class CallCenters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.fileInput = React.createRef();
    // this.handleChangeName = this.handleChangeName.bind(this);
    // this.handleChangeFlag = this.handleChangeFlag.bind(this);
    // this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
    // this.handleCurrencySymbol = this.handleCurrencySymbol.bind(this);
    // this.handleExchange = this.handleExchange.bind(this);
    // this.handleChangeCode = this.handleChangeCode.bind(this);
    // this.handleChangeCodeLength = this.handleChangeCodeLength.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }


    componentDidMount(){
        this.props.onGetCallCenter()
        this.props.onGetCountries()
    }
  
  
    render() {
      // console.log(this.props.countries);

    return (
        <div >

        <div>
            <button onClick={this.props.onGetCallCenter}>Get tracks</button>
        </div>
        <ul>
            {/* {this.props.countries.status} */}
            {/* <button onClick={() => console.log(this.props.countries)}>Props </button> */}
        </ul>
        <table >
        <thead>
    <tr>
      <td> Name </td> 
      <td> Country Name </td>
      <td>Flag</td>
      <td> Operators Count </td>
      <td> Managers Count </td>
      <td> Main Managers Count </td>
    </tr> 
  </thead>
  <tbody>
    {console.log(this.props)}
      {this.props.callCenters.map(callCenter =>
        <tr key={callCenter.id}>
            { <td> {callCenter.name} </td> }
            <td> {callCenter.country ? callCenter.country.name : "Undef"} </td>
            <td> <img src={callCenter.country ? callCenter.country.flag : "Undef"} alt ={callCenter.id} ></img> </td> 
            <td> {callCenter.operators_count} </td>
            <td> {callCenter.managers_count} </td>
            <td> {callCenter.main_managers_count} </td>

       <td> <button onClick = {() => {ReactDOM.render(<AddCallcenter countries = {this.props.countries} callCenter = {callCenter}   onGetCallCenter = {this.props.onGetCallCenter } />, document.getElementById('add2'))}}>Редактировать</button> </td>


    </tr> 
    )}
    
  </tbody>
  </table>
 {/* <AddCountry /> */}
  <button onClick = {() => {ReactDOM.render(<AddCallcenter onGetCallCenter = {this.props.onGetCallCenter} countries = {this.props.countries} />, document.getElementById('add2'))}}>Добавить CallCenter</button>
  <div id = 'add2'></div>
        </div>
      );
    }
  }
  
  export default connect(
    state => ({
      callCenters: state.callCenters,
      countries: state.countries
    }),
    dispatch => ({
    
      onGetCallCenter: () => {
        dispatch(getCallCenter());
      },
      onGetCountries: () => {
        dispatch(getCountries());
      }
    })
  )(CallCenters);