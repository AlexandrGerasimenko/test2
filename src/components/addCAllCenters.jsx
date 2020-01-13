import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class AddCallcenters extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fileInput = React.createRef();
        this.handleChangeName = this.handleChangeName.bind(this);
        
        this.handleExchange = this.handleExchange.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeCodeLength = this.handleChangeCodeLength.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickDel = this.handleClickDel.bind(this);

    }
    handleClickDel() {
        ReactDOM.unmountComponentAtNode(document.getElementById('add2'))
    }
    handleChangeName(event) {
        this.setState({name: event.target.value});
    }
    
    handleExchange(event) {
        this.setState({country: event.target.value});
    }

    handleChangeCode(event) {
        this.setState({code: event.target.value});
    }
    handleChangeCodeLength(event) {
        this.setState({codeLength: event.target.value});
    }
    handleSubmit(event) {
        if( this.props.countries.map(country => country.name).indexOf(this.state.country) >= 0){
        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.token);
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        // function chooseData(param){
        //     if(!!this.state.param){
        //      return   this.state.param
        //     }
        //     return this.props.country.param
        // }
        var formdata = new FormData();
        formdata.append("name", (!!this.state.name) ? this.state.name : this.props.callCenter.name);
        console.log((!!this.state.name))
        
        formdata.append("country_id", "1");
        formdata.append("ip", "");

        formdata.append("content_type", "call_center");
        formdata.append("action", "create");
        if (!!(this.props.country)) 
            formdata.append("id", this.props.country.id);
        

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        // console.log(!!(this.props.country))
        // console.log(this.props.country == true)
        let url = !!(this.props.callCenter) ? "http://react.octarine.com.ua/api/call-center/edit" : "http://react.octarine.com.ua/api/call-center/create"
        // console.log(url)
        fetch(url, requestOptions).then(response => response.text()).then(result => console.log(result))
        .then(() => this.props.onGetCallCenter())
                .then(() => this.handleClickDel())
                        .catch(error => console.log('error', error));
        event.preventDefault();
    }else{
        alert('Перед созданием колл-центра, создайте страну')
    }

    }
    render() { // console.log(this.props == true);

        return (
            <div>
                <div>
                    <form id="addCountry" className="addCountry"
                        onSubmit={
                            this.handleSubmit
                    }>
                        <label>
                            Название :
                            <br/>
                            <input type="text"
                                value={
                                    this.state.name || this.props.country && this.props.country.name
                                }
                                onChange={
                                    this.handleChangeName
                                }/> {/* {console.log(this.props)} */} </label>
              
                    
                        <label>
                            Страна:
                            <br/>
                            <input type="text"
                                value={
                                    this.state.exchange || (this.props.country && this.props.country.dollar_rate)
                                }
                                onChange={
                                    this.handleExchange
                                }/>
                        </label>
                        <label>
                            Код страны (по номеру телефона):
                            <br/>
                            <input type="number"
                                value={
                                    this.state.code || (this.props.country && this.props.country.code)
                                }
                                onChange={
                                    this.handleChangeCode
                                }/>
                        </label>
               
                        <br/> {/* <button type="submit" value="Отправить" /><button></button> */}
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddCallcenters
