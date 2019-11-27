import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import RestaurantsApiService from '../../services/restaurant-api-service';
import randomColor from 'randomcolor';
import Loading from '../Loading/Loading';


export default class CuisineBreakdown extends Component {
    state = {
        labels: null,
        datasets: [
            {
                label: 'something',
                backgroundColor: null,
                data: null
            }
        ],
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true })
        RestaurantsApiService.getCuisineChartData()
            .then(cuisines => {
                const labels = cuisines.map(cuisine => cuisine.cuisine_name)
                const data = cuisines.map(cuisine => cuisine.count)
                const backgroundColors = randomColor({ count: data.length, hue: 'random' });
                const newDatasets = this.state.datasets.slice()
                newDatasets[0].data = data
                newDatasets[0].backgroundColor = backgroundColors
                this.setState({
                    labels: labels,
                    datasets: newDatasets,
                    loading: false
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.loading ? <Loading /> :
                    <Pie
                        data={this.state}
                        options={{
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                }
            </div>
        )
    }
}