import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {getCountries} from '../actions/countries';
import {connect} from 'react-redux'
import AddCountry from './addCountries'


class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        this.props.onGetCountries()
    }


    render() { 

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                flag
                            </td>
                            <td>
                                name
                            </td>
                            <td>currency
                            </td>
                            <td>
                                country symbol
                            </td>
                            <td>
                                country dollar_rate
                            </td>
                            <td>
                                Edit</td>
                        </tr>
                    </thead>
                    <tbody> {
                        this.props.countries.map(country => <tr key={
                            country.id
                        }>
                            <td>
                                <img src={
                                        country.flag
                                    }
                                    alt
                                    ={country.flag}></img>
                            </td>
                            <td> {
                                country.name
                            } </td>
                            <td> {
                                country.currency
                            } </td>
                            <td> {
                                country.symbol
                            } </td>
                            <td> {
                                country.dollar_rate
                            } </td>
                            <td>
                                <button onClick= {() => {ReactDOM.render(<AddCountry country ={country}  onGetCountries = {this.props.onGetCountries} />, document.getElementById('add'))}}>Редактировать</button>
                            </td>
                        </tr>)
                    } </tbody>
                </table>
                {/* <AddCountry /> */}
                <button onClick= {() => {ReactDOM.render(<AddCountry onGetCountries = {this.props.onGetCountries} />, document.getElementById('add'))}}>Добавить страну</button>
                <div id='add'></div>
            </div>
        );
    }
}

export default connect(state => ({countries: state.countries}), dispatch => ({

    onGetCountries: () => {
        dispatch(getCountries());
    }
}))(Countries);
