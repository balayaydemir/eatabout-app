import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import RestaurantsApiService from '../../services/restaurant-api-service';
import randomColor from 'randomcolor';


export default class CuisineBreakdown extends Component {
    state = {
        labels: null,
        datasets: [
            {
                label: 'something',
                backgroundColor: null,
                data: null
            }
        ]
    }

    componentDidMount() {
        RestaurantsApiService.getCuisineChartData()
            .then(cuisines => {
                const labels = cuisines.map(cuisine => cuisine.cuisine_name)
                const data = cuisines.map(cuisine => cuisine.count)
                const backgroundColors = randomColor({ count: data.length, hue: 'random', luminosity: 'dark' });
                const newDatasets = this.state.datasets.slice()
                newDatasets[0].data = data
                newDatasets[0].backgroundColor = backgroundColors
                this.setState({
                    labels: labels,
                    datasets: newDatasets
                })
            })
    }

    render() {
        return (
            <div>
                <Pie 
                    data={this.state}
                    options={{
                        legend:{
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        )
    }
}