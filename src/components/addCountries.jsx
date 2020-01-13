import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class AddCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fileInput = React.createRef();
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeFlag = this.handleChangeFlag.bind(this);
        this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
        this.handleCurrencySymbol = this.handleCurrencySymbol.bind(this);
        this.handleExchange = this.handleExchange.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeCodeLength = this.handleChangeCodeLength.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickDel = this.handleClickDel.bind(this);

    }
    handleClickDel() {
        ReactDOM.unmountComponentAtNode(document.getElementById('add'))
        console.log(document.getElementById('addCountry'))
    }
    handleChangeName(event) {
        this.setState({name: event.target.value});
    }
    handleChangeFlag(event) {
        this.setState({flag: event.target.value});
    }
    handleChangeCurrency(event) {
        this.setState({currency: event.target.value});
    }
    handleCurrencySymbol(event) {
        this.setState({currencySymbol: event.target.value});
    }
    handleExchange(event) {
        this.setState({exchange: event.target.value});
    }

    handleChangeCode(event) {
        this.setState({code: event.target.value});
    }
    handleChangeCodeLength(event) {
        this.setState({codeLength: event.target.value});
    }
    handleSubmit(event) {
        //     // var formdata = new FormData();
        //     // formdata.append("name", this.state.name);
        //     // formdata.append("flag", this.state.flag);
        //     // formdata.append("currency", this.state.currency);
        //     // formdata.append("symbol", this.state.currencySymbol);
        //     // formdata.append("dollar_rate", this.state.exchange);
        //     // formdata.append("code", this.state.code);
        //     // formdata.append("count_of_symbol", this.state.codeLength);
        //     // formdata.append("content_type", this.state.name);
        //     // formdata.append("content_type", "country");
        //     // formdata.append("action", "create");
        //     // createFetch()
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
        formdata.append("name", (!!this.state.name) ? this.state.name : this.props.country.name);
        console.log((!!this.state.name))
        formdata.append("flag", (!!this.state.flag) ? this.state.flag : this.props.country.flag);
        formdata.append("currency", (!!this.state.currency) ? this.state.currency : this.props.country.currency);
        formdata.append("symbol", (!!this.state.currencySymbol) ? this.state.currencySymbol : this.props.country.symbol);
        formdata.append("dollar_rate", (!!this.state.exchange) ? this.state.exchange : this.props.country.dollar_rate);
        formdata.append("code", (!!this.state.code) ? this.state.code : this.props.country.code);
        formdata.append("count_of_symbol", (!!this.state.codeLength) ? this.state.codeLength : this.props.country.count_of_symbol);
        formdata.append("content_type", "country");
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
        let url = !!(this.props.country) ? "http://react.octarine.com.ua/api/country/edit" : "http://react.octarine.com.ua/api/country/create"
        // console.log(url)
        fetch(url, requestOptions).then(response => response.text()).then(result => console.log(result)).then(() => this.props.onGetCountries()).then(() => this.handleClickDel()).catch(error => console.log('error', error));
        event.preventDefault();
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
                            Название страны:
                            <br/>
                            <input type="text"
                                value={
                                    this.state.name || this.props.country && this.props.country.name
                                }
                                onChange={
                                    this.handleChangeName
                                }/> {/* {console.log(this.props)} */} </label>
                        <label>
                            Флаг страны (картинку):
                            <br/>
                            <input type="file"
                                ref={
                                    this.fileInput
                                }
                                value={
                                    this.state.flag
                                }
                                onChange={
                                    this.handleChangeFlag
                                }/>
                        </label>
                        <label>
                            Название валют:
                            <br/>
                            <input type="text"
                                value={
                                    this.state.currency || (this.props.country && this.props.country.currency)
                                }
                                onChange={
                                    this.handleChangeCurrency
                                }/>
                        </label>
                        <label>
                            Символ валюты:
                            <br/>
                            <input type="text"
                                value={
                                    this.state.currencySymbol || (this.props.country && this.props.country.symbol)
                                }
                                onChange={
                                    this.handleCurrencySymbol
                                }/>
                        </label>
                        <label>
                            Курс валюты к доллару:
                            <br/>
                            <input type="number"
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
                        <label>
                            Кол-во символов в номер (без учета кода страны):
                            <br/>
                            <input type="number"
                                value={
                                    this.state.codeLength || (this.props.country && this.props.country.count_of_symbol)
                                }
                                onChange={
                                    this.handleChangeCodeLength
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

export default AddCountry
