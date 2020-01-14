import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fileInput = React.createRef();
        this.handleChangeCallCenter = this.handleChangeCallCenter.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePassword2 = this.handleChangePassword2.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
        this.handleChangeRole = this.handleChangeRole.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleClickDel() {
        ReactDOM.unmountComponentAtNode(document.getElementById('add3'))
    }
    handleChangeCallCenter(event) {
        this.setState({callCenter: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }
    handleChangePassword2(event) {
        this.setState({password2: event.target.value});
    }
    handleChangeSurname(event) {
        this.setState({surname: event.target.value});
    }
    handleChangeRole(event) {
        if (event.target.value === 'Оператор') {
            this.setState({role: 'o'});
        } else if (event.target.value === 'Менеджер') {
            this.setState({role: 'm'});
        } else if (event.target.value === 'Главный менеджер') {
            this.setState({role: 'mm'});
        }

    }
    handleSubmit(event) {

        event.preventDefault();
        if (this.state.password2) {
            if (this.state.password2 === this.state.password) 

                var myHeaders = new Headers();
            

            myHeaders.append("Authorization", "Bearer " + localStorage.token);
            myHeaders.append("X-Requested-With", "XMLHttpRequest");
            var formdata = new FormData();

            formdata.append("id", "1");
            formdata.append("call_center_id", this.state.callCenter ? this.state.callCenter : this.props.user.call_center_id);
            formdata.append("name", this.state.name ? this.state.name : this.props.user.name);
            formdata.append("surname", this.state.surname ? this.state.surname : this.props.user.surname);
            formdata.append("role", this.state.role ? this.state.role : this.props.user.role);
            formdata.append("email", this.state.email ? this.state.email : this.props.user.email);
            formdata.append("password", this.state.password ? this.state.password : this.props.user.password);
            formdata.append("content_type", "m");
            formdata.append("action", "edit");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            let url = !!(this.props.user) ? "http://react.octarine.com.ua/api/user/edit" : "http://react.octarine.com.ua/api/user/create"

            fetch(url, requestOptions).then(response => response.text()).then(() => this.props.onGetUsers()).then(() => this.handleClickDel()).catch(error => console.log('error', error));
            event.preventDefault();
        } else {
            alert("Пароли не совпадают")
        }
    }

    render() {

        return (
            <div>
                <div>
                    <form id="addUser" className="addUser"
                        onSubmit={
                            this.handleSubmit
                    }>
                        <label>
                            Колл-центр – в котором состоит пользователь
                            <br/>
                            <input type="number"
                                value={
                                    this.state.callCenter || (this.props.user && this.props.user.call_center_id)
                                    // this.state.callCenter ? this.state.callCenter :  this.props.user.call_center_id
                                }
                                onChange={
                                    this.handleChangeCallCenter
                                }/> {/* {console.log(this.props)} */} </label>


                        <label>
                            Email:
                            <br/>
                            <input type="text"
                                value={
                                    this.state.email || (this.props.user && this.props.user.email)
                                    // this.state.email ? this.state.email :  this.props.user.email
                                }
                                onChange={
                                    this.handleChangeEmail
                                }/>
                        </label>
                        <label>
                            Пароль
                            <br/>
                            <input type="password"
                                value={
                                    this.state.password ? this.state.password : this.props.password
                                }
                                onChange={
                                    this.handleChangePassword
                                }/>
                        </label>
                        {
                        this.props.user ? <label>
                            Повторите пароль
                            <br/>
                            <input type="password"
                                value={
                                    this.state.password2 ? this.state.password2 : this.props.password2
                                }
                                onChange={
                                    this.handleChangePassword2
                                }/>
                        </label> : null
                    }
                        <label>
                            Имя
                            <br/>
                            <input type="text"
                                value={
                                    this.state.name || (this.props.user && this.props.user.name)
                                    // this.state.name ? this.state.name :  this.props.user.name
                                }
                                onChange={
                                    this.handleChangeName
                                }/>
                        </label>
                        <label>
                            Фамилия
                            <br/>
                            <input type="text"
                                value={
                                    this.state.surname || (this.props.user && this.props.user.surname)
                                    // this.state.surname ? this.state.surname :  this.props.user.surname
                                }
                                onChange={
                                    this.handleChangeSurname
                                }/>
                        </label>
                        <label>
                            Роль
                            <br/>
                            <select value={
                                    this.state.role || (this.props.user && this.props.user.role)
                                    // this.state.role ? this.state.role :  this.props.user.role
                                }
                                onChange={
                                    this.handleChangeRole
                            }>
                                <option>Выберете Роль</option>
                                <option>Оператор
                                </option>
                                <option>Менеджер</option>
                                <option>Главный менеджер</option>
                            </select>

                        </label>

                        <br/>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddUser
