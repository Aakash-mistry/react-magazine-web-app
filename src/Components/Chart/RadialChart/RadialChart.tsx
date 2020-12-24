import React from "react";
import {
     RadialBar,
     RadialBarChart,
     ResponsiveContainer,
     Legend,
} from "recharts";

interface Props {
     cx: number;
     cy: number;
     innerRadius: number;
     outerRadius: number;
     barSize: number;
     data: any[];
     radialBar: { datakey: string }[];
     legand: {
          iconSize: number;
          width: number;
          height: number;
     }[];
     height: number;
}

const RadialChartComponent: React.FC<Props> = (props) => {
     const {
          cx,
          cy,
          innerRadius,
          outerRadius,
          barSize,
          data,
          radialBar,
          legand,
          height,
     } = props;
     return (
          <ResponsiveContainer height={height}>
               <RadialBarChart
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    barSize={barSize}
                    data={data}>
                    {radialBar.map((element) => (
                         <RadialBar
                              label={{ position: "insideStart", fill: "#fff" }}
                              dataKey={element.datakey}
                         />
                    ))}
                    {legand.map((element) => (
                         <Legend
                              iconSize={element.iconSize}
                              width={element.width}
                              height={element.height}
                         />
                    ))}
               </RadialBarChart>
          </ResponsiveContainer>
     );
};

export default RadialChartComponent;
