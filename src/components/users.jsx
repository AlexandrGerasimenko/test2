import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {getUsers} from '../actions/users';
import {connect} from 'react-redux'
import AddUser from './addUser'


class Users extends Component {
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


    componentDidMount() {
        this.props.onGetUsers()
    }


    render() { // console.log(this.props.countries);

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                Имя
                            </td>
                            <td>
                                Фамилия
                            </td>
                            <td>Роль</td>
                            <td>
                                Страна
                            </td>
                            <td>
                                Колл-центр</td>
                            <td>
                                Edit</td>
                        </tr>
                    </thead>
                    <tbody> {
                        this.props && this.props.users && this.props.users.all && this.props.users.all.map(user => <tr key={
                            user.id
                        }>
                            <td> {
                                user.name
                            } </td>
                            <td> {
                                user.surname
                            } </td>
                            <td> {
                                user.role
                            } </td>
                            <td> {
                                user.role
                            } </td>
                            <td> {
                                user.call_center_id
                            } </td>
                            <td>
                                <button onClick= {() => {ReactDOM.render(<AddUser user ={user}  onGetUsers = {this.props.onGetUsers} />, document.getElementById('add3'))}}>Редактировать</button>
                            </td>
                        </tr>)
                    } </tbody>
                </table>
                <button onClick= {() => {ReactDOM.render(<AddUser onGetUsers = {this.props.onGetUsers} />, document.getElementById('add3'))}}>Добавить пользователя</button>
                <div id='add3'></div>
            </div>
        );
    }
}

export default connect(state => ({users: state.users}), dispatch => ({

    onGetUsers: () => {
        dispatch(getUsers());
    }
}))(Users);
