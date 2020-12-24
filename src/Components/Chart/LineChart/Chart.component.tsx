import React from "react";
import {
     LineChart,
     Line,
     XAxis,
     YAxis,
     Tooltip,
     Legend,
     ResponsiveContainer,
     CartesianGrid,
} from "recharts";

import { Box } from "@material-ui/core";

interface Props {
     data: any[];
     xAxis: string;
     line: { dataKey: string; stroke: string }[];
     height?: number;
}

const customTooltips = ({ active, payload, label }) => {
     if (active) {
          return (
               <Box className='custom-tooltip'>
                    <p className='label'>{`${payload[0].value} Popularity of the language`}</p>
                    <p className='intro'>{`Language : ${label}`}</p>
               </Box>
          );
     }
};

const ChartComponent: React.FC<Props> = (props) => {
     const { data, xAxis, line, height } = props;
     return (
          <ResponsiveContainer height={height} width='100%'>
               <LineChart data={data}>
                    <XAxis dataKey={xAxis} />
                    <XAxis xAxisId='top' orientation='top' />
                    <YAxis yAxisId='left' />
                    <YAxis yAxisId='right' orientation='right' />
                    <CartesianGrid strokeOpacity='1' strokeDasharray='3 3' />
                    <Tooltip content={customTooltips} />
                    <Legend />
                    {line.map((singleLine) => (
                         <Line
                              yAxisId='left'
                              type='monotone'
                              dataKey={singleLine.dataKey}
                              stroke={singleLine.stroke}
                              key={singleLine.dataKey}
                         />
                    ))}
               </LineChart>
          </ResponsiveContainer>
     );
};

export default ChartComponent;
