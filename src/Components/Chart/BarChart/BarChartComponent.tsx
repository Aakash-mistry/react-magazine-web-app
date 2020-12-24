import React from "react";
import {
     BarChart,
     Bar,
     XAxis,
     YAxis,
     Tooltip,
     ResponsiveContainer,
} from "recharts";

interface Props {
     data: any[];
     xAxis: string;
     bar: { datakey: string; fill: string }[];
     height: number;
}

const BarChartComponent: React.FC<Props> = (props) => {
     const { data, xAxis, bar, height } = props;
     return (
          <ResponsiveContainer height={height} width='100%'>
               <BarChart data={data}>
                    <XAxis dataKey={xAxis} />
                    <YAxis />
                    <Tooltip />
                    {bar.map((element) => (
                         <Bar dataKey={element.datakey} fill={element.fill} />
                    ))}
               </BarChart>
          </ResponsiveContainer>
     );
};

export default BarChartComponent;
