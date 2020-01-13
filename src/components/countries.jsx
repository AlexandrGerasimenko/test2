import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getCountries } from '../actions/countries';
import { connect } from 'react-redux'
import AddCountry from './addCountries'


class Countries extends Component {
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
        this.props.onGetCountries()
    }
  
  
    render() {
      // console.log(this.props.countries);

    return (
        <div >

        <div>
            <button onClick={this.props.onGetCountries}>Get tracks</button>
        </div>
        <ul>
            {this.props.countries.status}
            <button onClick={() => console.log(this.props.countries)}>Props </button>
        </ul>
        <table >
        <thead>
    <tr>
      <td> flag </td> 
      <td> name </td>
      <td>currency </td>
      <td> country symbol </td>
      <td> country dollar_rate </td>
    </tr> 
  </thead>
  <tbody>
      {this.props.countries.map(country =>
        <tr key={country.id}>
          <td> <img src={country.flag} alt ={country.flag} ></img> </td> 
          <td> {country.name} </td>
          <td> {country.currency} </td>
          <td> {country.symbol} </td>
        <td> {country.dollar_rate} </td>
      <td> <button onClick = {() => {ReactDOM.render(<AddCountry country ={country}  onGetCountries = {this.props.onGetCountries} />, document.getElementById('add'))}}>Редактировать</button> </td>
    </tr> 
    )}
    
  </tbody>
  </table>
 {/* <AddCountry /> */}
  <button onClick = {() => {ReactDOM.render(<AddCountry onGetCountries = {this.props.onGetCountries} />, document.getElementById('add'))}}>Добавить страну</button>
  <div id = 'add'></div>
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
  )(Countries);