import React, {Component} from "react";
import axios from 'axios';
// import Chart from './Graph'
import Styles from './Styles';


class SelectCurrency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    componentDidMount() {
        axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=EUR`)
            .then(res => {
                const coin = res;
                this.setState({
                    USD: {
                        bitcoinPrice: this.getApi(coin, 'USD', 1),
                        etheriumPrice: this.getApi(coin, 'USD', 1027),
                        ripplePrice: this.getApi(coin, 'USD', 52),
                        cardanoPrice: this.getApi(coin, 'USD', 2010),
                        litecoinePrice: this.getApi(coin, 'USD', 2)
                    },
                    EURO: {
                        bitcoinPrice: this.getApi(coin, 'EUR', 1),
                        etheriumPrice: this.getApi(coin, 'EUR', 1027),
                        ripplePrice: this.getApi(coin, 'EUR', 52),
                        cardanoPrice: this.getApi(coin, 'EUR', 2010),
                        litecoinePrice: this.getApi(coin, 'EUR', 2)
                    }
                })
            });
        axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=RUB`)
            .then(res => {
                const rub = res
                this.setState({
                    RUB: {
                        bitcoinPrice: this.getApi(rub, 'RUB', 1),
                        etheriumPrice: this.getApi(rub, 'RUB', 1027),
                        ripplePrice: this.getApi(rub, 'RUB', 52),
                        cardanoPrice: this.getApi(rub, 'RUB', 2010),
                        litecoinePrice: this.getApi(rub, 'RUB', 2),
                    }
                })
            })
    }

    onChangeHandler = (e) => {
        this.setState({value: e.target.value});
    };

    criptCurrencyCalculator = (currency, cript) => {
        if (currency === 'USD') {
            return this.state.USD[cript] + " $"
        }
        if (currency === 'EURO') {
            return this.state.EURO[cript] + " Є"
        }
        if (currency === 'RUB') {
            return this.state.RUB[cript] + " P"
        }
    };

    getApi = (json, currency, currencyId) => {
        if (currency === 'USD') {
            return json.data.data[`${currencyId}`].quotes.USD.price
        }
        if (currency === 'EUR') {
            return json.data.data[`${currencyId}`].quotes.EUR.price
        }
        if (currency === 'RUB') {
            return json.data.data[`${currencyId}`].quotes.RUB.price
        }
    };

    convertClick = () => {
        if (this.state.value === '') {
            alert('choose currency');
            return
        }
        if (this.valueInput.value.match(/^[-\+]?\d+/) === null) {
            alert('input value');
            return
        }
        if (this.valueInput.value.match(/^[-\+]?\d+/) < 0) {
            alert('enter a positive number');
            return
        }
        if (this.convertSelect.value === 'title') {
            alert('choose cript');
            return
        }
        let num = parseInt(this.valueInput.value.replace(/\D+/g, ""));
        let calculator = (num) * (this.state[this.state.value][this.convertSelect.value]);
        calculator.toFixed(1);
        let currency = this.convertSelect.value.split(/[A-Z]/);

        let result = `${num} ${currency[0]} = ${calculator.toFixed(2)} ${this.state.value}`;
        this.span.innerText = result;
    };

    render() {
        return (
            <Styles>
                <div>
                    <select className={this.props.name} onChange={this.onChangeHandler}>
                        <option value="Choose currency">Choose currency</option>
                        <option value="USD">USD</option>
                        <option value="EURO">EUR</option>
                        <option value="RUB">RUB</option>
                    </select><br/>
                    <table align="center" width="70%">
                        <tr>
                            <th>Bitcoin</th>
                            <th>Etherium</th>
                            <th>Ripple</th>
                            <th>Cardano</th>
                            <th>LiteCoine</th>
                        </tr>
                        <tr>
                            <td>
                                <span>{this.criptCurrencyCalculator(this.state.value, 'bitcoinPrice') || '-'}</span>
                            </td>
                            <td>
                                <span>{this.criptCurrencyCalculator(this.state.value, 'etheriumPrice') || '-'}</span>
                            </td>
                            <td>
                                <span>{this.criptCurrencyCalculator(this.state.value, 'ripplePrice') || '-'}</span>
                            </td>
                            <td>
                                <span>{this.criptCurrencyCalculator(this.state.value, 'cardanoPrice') || '-'}</span>
                            </td>
                            <td>
                                <span>{this.criptCurrencyCalculator(this.state.value, 'liteCoinePrice') || '-'}</span>
                            </td>
                        </tr>
                    </table>
                    <div>
                        <div className="container">
                            <h1>Cryptocurrency Converter Calculator</h1>
                            <div className="flex-container">
                            <input className='valueInput' type="number" ref={(input) => this.valueInput = input}/>
                            <select ref={(select) => this.convertSelect = select}>
                                <option value="title">Choose cripto</option>
                                <option value="bitcoinPrice">Bitcoin</option>
                                <option value="etheriumPrice">Etherium</option>
                                <option value="ripplePrice">Ripple</option>
                                <option value="cardanoPrice">Cardano</option>
                                <option value="liteCoinePrice">LiteCoine</option>
                            </select>
                            </div>
                            <button onClick={this.convertClick}>convert</button>
                            <br/>
                            <span ref={(span) => this.span = span}></span>
                        </div>
                    </div>
                    {/*<StaticGraph />*/}
                    {/*<DynamicGraph />*/}
                </div>
            </Styles>
        );
    }
}

export default SelectCurrency;