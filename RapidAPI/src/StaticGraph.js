import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

class StaticGraph extends Component {
    state = {
        selectValue: '',
        year: {
            labels: [1],
            data: [1]
        }
    };

    componentDidMount() {
        axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.selectValue === 'month' ? this.dateFunc(30) : this.state.selectValue === 'day' ? this.dateFunc(2) : this.dateFunc(360)}&end=${this.dateFunc(1)}`)
            .then(res => {
                this.setState({year: {labels: Object.keys(res.data.bpi), data: Object.values(res.data.bpi)}})
            })
    }

    dateFunc = (day) => {
        let date = new Date();
        return new Date(date.setDate(date.getDate() - day)).toISOString().substring(0, 10);
    };
    onChangeHandler = (e) => {
        this.setState({selectValue: e.target.value});
        axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${e.target.value === 'month' ? this.dateFunc(30) : e.target.value === 'day' ? this.dateFunc(2) : this.dateFunc(360)}&end=${this.dateFunc(0)}`)
            .then(res => {
                this.setState({year: {labels: Object.keys(res.data.bpi), data: Object.values(res.data.bpi)}})
            })
    };

    render() {
        return (
            <div>
                <select className='StaticGraph' onChange={this.onChangeHandler}>
                    <option value="year">Year</option>
                    <option value="day">Day</option>
                    <option value="month">Month</option>
                </select>
                <Line
                    width={70}
                    height={30}
                    data={{
                        labels: this.state.year.labels,
                        datasets: [
                            {
                                label: 'BTC',
                                fill: true,
                                lineTension: 0.1,
                                backgroundColor: 'rgba(75,192,192,0.4)',
                                borderColor: 'rgba(75,192,192,1)',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: 'rgba(75,192,192,1)',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: this.state.year.data
                            }
                        ]
                    }}
                    options={{
                        position: "center",
                        maintainAspectRatio: true
                    }}
                />
            </div>
        )
    }
}

export default StaticGraph;