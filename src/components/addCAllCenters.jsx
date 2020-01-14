import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class AddCallcenters extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fileInput = React.createRef();
        this.handleChangeName = this.handleChangeName.bind(this);

        this.handleCallCenterCountry = this.handleCallCenterCountry.bind(this);
        this.handleChangeIp = this.handleChangeIp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleClickDel() {
        ReactDOM.unmountComponentAtNode(document.getElementById('add2'))
    }
    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleCallCenterCountry(event) {
        this.setState({callCenterCountry: event.target.value});
    }

    handleChangeIp(event) {
        this.setState({ip: event.target.value});
    }
    handleSubmit(event) {

        event.preventDefault();
        if (this.state.ip && this.state.ip !== '192.168.88.1') {
            alert('Неверный Ip')
        }
        if ((this.state.callCenterCountry && (this.props.countries.map(country => country.name).indexOf(this.state.callCenterCountry) <= 0))) {
            alert('Неверный ctr')
        } else {
            let country_id = !(this.state.callCenterCountry) ? this.props.callCenter.country.id : this.props.countries.filter((country) => country.name === this.state.callCenterCountry)[0].id
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.token);
            myHeaders.append("X-Requested-With", "XMLHttpRequest");
            var formdata = new FormData();

            formdata.append("content_type", "call_center");
            if (this.props.callCenter) {
                formdata.append("action", "edit")
                formdata.append("name", this.state.name ? this.state.name : this.props.callCenter.name);
                formdata.append("id", this.props.callCenter.id);
                formdata.append("country_id", country_id);
                formdata.append("ip", this.state.ip ? this.state.ip : this.props.callCenter.ip);
            } else {
                formdata.append("action", "create");
                formdata.append("name", this.state.name);
                formdata.append("ip", this.state.ip);
                formdata.append("country_id", country_id);
            }

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            let url = !!(this.props.callCenter) ? "http://react.octarine.com.ua/api/call-center/edit" : "http://react.octarine.com.ua/api/call-center/create"
            fetch(url, requestOptions).then(response => response.text()).then(() => this.props.onGetCallCenter()).then(() => this.handleClickDel()).catch(error => console.log('error', error));
            event.preventDefault();
        }


    }
    render() {

        return (
            <div>
                <div>
                    <form id="addCountry" className="addCountry"
                        onSubmit={
                            this.handleSubmit
                    }>
                        <label>
                            Название колл-центра :
                            <br/>
                            <input type="text"
                                value={
                                    this.state.name || (this.props.callCenter && this.props.callCenter.name)
                                }
                                onChange={
                                    this.handleChangeName
                                }/> {/* {console.log(this.props)} */} </label>


                        <label>
                            Страна:
                            <br/>
                            <input type="text"
                                value={
                                    this.state.callCenterCountry || (this.props.callCenter && this.props.callCenter.country.name)
                                }
                                onChange={
                                    this.handleCallCenterCountry
                                }/>
                        </label>
                        <label>
                            IP – в формате 192.168.88.1:
                            <br/>
                            <input type="text"
                                value={
                                    this.state.ip || (this.props.callCenter && this.props.callCenter.ip)
                                }
                                onChange={
                                    this.handleChangeIp
                                }/>
                        </label>

                        <br/>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddCallcenters
