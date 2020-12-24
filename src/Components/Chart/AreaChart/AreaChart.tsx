import React from "react";
import {
     AreaChart,
     Area,
     XAxis,
     YAxis,
     Tooltip,
     ResponsiveContainer,
} from "recharts";

import { Box } from "@material-ui/core";

interface Props {
     data: any[];
     xAxis: string;
     areas: { dataKey: string; stroke: string; fill: string }[];
     height: number;
}

const customTooltips = ({ active, payload, label }) => {
     if (active) {
          return (
               <Box className='custom-tooltip'>
                    <p className='label'>{`${payload[0].value} Popularity of the language`}</p>
               </Box>
          );
     }
};

const AreaChartComponent: React.FC<Props> = (props) => {
     const { data, xAxis, areas, height } = props;
     return (
          <ResponsiveContainer height={height} width='100%'>
               <AreaChart data={data}>
                    <XAxis dataKey={xAxis} />
                    <YAxis />
                    <Tooltip content={customTooltips} />
                    {areas.map((element) => (
                         <Area
                              type='monotone'
                              dataKey={element.dataKey}
                              key={element.dataKey}
                              fill={element.fill}
                              stroke={element.stroke}
                         />
                    ))}
               </AreaChart>
          </ResponsiveContainer>
     );
};

export default AreaChartComponent;
