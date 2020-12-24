import React from "react";
import {
     Radar,
     RadarChart,
     PolarGrid,
     PolarAngleAxis,
     PolarRadiusAxis,
     ResponsiveContainer,
} from "recharts";

interface Props {
     data: any[];
     cx: number;
     cy: number;
     outerRadius: number;
     width: number;
     height: number;
     polarAxis: string;
     radar: {
          name: string;
          datakey: string;
          stroke: string;
          fill: string;
          fillOpacity: string;
     }[];
}

const RadarChartComponent: React.FC<Props> = (props): JSX.Element => {
     const {
          data,
          cx,
          cy,
          outerRadius,
          width,
          height,
          radar,
          polarAxis,
     } = props;
     return (
          <ResponsiveContainer height={height} width={width}>
               <RadarChart
                    data={data}
                    cx={cx}
                    cy={cy}
                    outerRadius={outerRadius}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey={polarAxis} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    {radar.map((element) => (
                         <Radar
                              name={element.name}
                              dataKey={element.datakey}
                              stroke={element.stroke}
                              fill={element.fill}
                              fillOpacity={element.fillOpacity}
                         />
                    ))}
               </RadarChart>
          </ResponsiveContainer>
     );
};
export default RadarChartComponent;
