import React from 'react';
import ReactApexChart from 'react-apexcharts';

function Graph2 (){
  const series:any= [{
    name:'BTC Reward Halving',
    data: [50, 25, 12.5, 6.25, 3.125, 1.5625, 0.78125, 0.390625, 0.1953125, 0.09765625, 0.048828125],

  }
];
  const options:any= {
    chart: {
      type: 'line',
      height: 350,
      
    },
    stroke: {
      curve: 'stepline',
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'BTC Reward Halving 2009-2048',
      align: 'left'
    },
    markers: {
      hover: {
        sizeOffset: 4
      }
    },
    xaxis: {
      categories: [2009, 2012, 2016, 2020, 2024, 2028, 2032,2036, 2040, 2044, 2048],
    },
    annotations: {
      yaxis: [
        {
          title: {
            text: "BTC Reward Halving"
          },
        },
        {
          opposite: true,
          title: {
            text: "BTC Price"
          }
        },

        {
          y: 6.25,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#000",
              background: "#00E396"
            },
            text: "6.25 Reward"
          }
          
        },
          
      ],
      xaxis: [
        {
          x: 2020,
          x2: 2024,
          fillColor: '#B3F7CA',
          label: {
            text: 'We Are Here'
          }
        }
      ]
    }
    
  }
  return(
    <div>
      <ReactApexChart options={options} series={series} type="line" height={500} />
    </div>
  )
}

export default Graph2;
