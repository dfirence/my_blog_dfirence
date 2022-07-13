import React from 'react';
import ReactECharts from 'echarts-for-react';


const LineChart: React.FC = () => {
  const options = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [{
        name: 'Pressure',
        type: 'gauge',
        progress: {
            show: true
        },
        detail: {
            valueAnimation: true,
            formatter: '{value}'
        },
        data: [{
            value: 50,
            name: 'Techniques'
        }]
    }]
  };
  return <ReactECharts option={options} />;
};
export default LineChart;