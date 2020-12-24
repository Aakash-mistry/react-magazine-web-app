import React from "react";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

interface Props {
     innerChart: {
          dataKey: string;
          startAngle: number;
          endAngle: number;
          data: any[];
          cx: number;
          cy: number;
          innerRadius: number;
          outerRadius: number;
          fill: string;
     }[];
     outerChart: {
          dataKey: string;
          startAngle: number;
          endAngle: number;
          data: any[];
          cx: number;
          cy: number;
          outerRadius: number;
          fill: string;
     }[];
     height: number;
     width: number;
}

const PieChartComponent: React.FC<Props> = (props) => {
     const { innerChart, outerChart, height } = props;
     return (
          <ResponsiveContainer height={400} width={400}>
               <PieChart height={height}>
                    {outerChart.map((element) => (
                         <Pie
                              dataKey={element.dataKey}
                              startAngle={element.startAngle}
                              endAngle={element.endAngle}
                              data={element.data}
                              cx={element.cx}
                              cy={element.cy}
                              outerRadius={element.outerRadius}
                              fill={element.fill}
                         />
                    ))}
                    {innerChart.map((element) => (
                         <Pie
                              dataKey={element.dataKey}
                              startAngle={element.startAngle}
                              endAngle={element.endAngle}
                              data={element.data}
                              cx={element.cx}
                              cy={element.cy}
                              innerRadius={element.innerRadius}
                              outerRadius={element.outerRadius}
                              fill={element.fill}
                              label
                         />
                    ))}
                    <Tooltip />
               </PieChart>
          </ResponsiveContainer>
     );
};

export default PieChartComponent;
