import {
     ScatterChart,
     Scatter,
     XAxis,
     YAxis,
     Tooltip,
     ResponsiveContainer,
     CartesianGrid,
} from "recharts";
import React from "react";

interface Props {
     data: any[];
     xAxis: { datakey: string; name: string; unit: string }[];
     yAxis: { datakey: string; name: string; unit: string }[];
     scatter: { fill: string; name: string }[];
     height: number;
}

const ScatterChartComponent: React.FC<Props> = (props) => {
     const { data, xAxis, yAxis, scatter, height } = props;
     return (
          <ResponsiveContainer width='100%' height={height}>
               <ScatterChart data={data}>
                    {xAxis.map((element) => (
                         <XAxis
                              key={element.datakey}
                              type='number'
                              dataKey={element.datakey}
                              name={element.name}
                              unit={element.unit}
                         />
                    ))}
                    {yAxis.map((element) => (
                         <YAxis
                              key={element.datakey}
                              type='number'
                              dataKey={element.datakey}
                              name={element.name}
                              unit={element.unit}
                         />
                    ))}
                    <CartesianGrid strokeDasharray='2 2' />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    {scatter.map((element) => (
                         <Scatter
                              data={data}
                              fill={element.fill}
                              name={element.name}
                         />
                    ))}
               </ScatterChart>
          </ResponsiveContainer>
     );
};

export default ScatterChartComponent;
