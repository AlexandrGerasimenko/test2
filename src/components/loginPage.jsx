import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCountries} from '../actions/countries';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            valid: false,
            redirectToReferrer: false
        }
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
            valid: state.email.length > 0 && state.password.length > 0

        }
    }
    handleChange(e) {
        this.setState({email: e.target.value})
        this.setState(this.validate)
    }

    handleChange2(e) {
        this.setState({password: e.target.value})
        this.setState(this.validate)
    }

    handleSend(props) {
        var formdata = new FormData();
        formdata.append("email", "admin@gmail.com"
        // this.state.email
        );
        formdata.append("password", "qweqwe"
        // this.state.password
        );

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://react.octarine.com.ua/api/auth/login", requestOptions).then(response => response.text()).then(response => JSON.parse(response)).then(result => localStorage.setItem('token', result.data.access_token), this.setState(() => ({redirectToReferrer: true}))).then(this.props.onGetCountries).then(console.log('ok')).catch(error => console.log('error', error));
    }


    render() {
        const {from} = this.props.location.state || {
            from: {
                pathemail: '/countries'
            }
        }
        const {redirectToReferrer} = this.state
        if (redirectToReferrer === true) {
            return <Redirect to={from}/>
        }

        return (
            <div className="log-wrapper flex">
                <div>
                    <div>Введите email</div>
                    <input value={
                            this.state.email
                        }
                        onChange={
                            this.handleChange
                        }
                        style={
                            {
                                backgroundColor: this.state.valid ? '' : '#f99',
                                type: 'password'
                            }
                        }/>
                    <div>Введите пароль</div>
                    <input type='password'
                        value={
                            this.state.password
                        }
                        onChange={
                            this.handleChange2
                        }
                        style={
                            {
                                backgroundColor: this.state.valid ? '' : '#f99'
                            }
                        }/>
                    <div>
                        <button id='log'
                            disabled={
                                !this.state.valid
                            }
                            onClick={
                                this.handleSend
                        }>Log in</button>
                    </div>

                    <br/>

                </div>
            </div>
        );
    }
}


export default connect(state => ({countries: state.countries}), dispatch => ({
    onGetCountries: () => {
        dispatch(getCountries());
    }
}))(SignUp);
