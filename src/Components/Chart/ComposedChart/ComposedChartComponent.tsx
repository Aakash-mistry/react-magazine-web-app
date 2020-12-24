import React from "react";
import {
     ComposedChart,
     Line,
     Bar,
     XAxis,
     YAxis,
     Tooltip,
     ResponsiveContainer,
     Legend,
} from "recharts";
import { Box } from "@material-ui/core";

import "./styles.css";

interface Props {
     data: any[];
     xAxis: string;
     bar: { datakey: string; fill: string; barSize: number }[];
     line: { datakey: string; stroke: string }[];
     height: number;
}

const CustomTooltip = ({ active, payload, label }) => {
     if (active) {
          return (
               <Box className='custom-tooltip'>
                    <p className='composed-label'>{`${payload[0].value} Popularity of the language`}</p>
                    <p className='intro'>{`Language : ${label}`}</p>
                    <p className='intro2'>
                         This is some information related to chart
                    </p>
               </Box>
          );
     }
};

const ComposedChartComponent: React.FC<Props> = (props) => {
     const { data, xAxis, bar, line, height } = props;

     return (
          <ResponsiveContainer height={height} width='100%'>
               <ComposedChart data={data}>
                    <XAxis dataKey={xAxis} />
                    <YAxis />
                    <Tooltip content={CustomTooltip} />
                    <Legend />
                    {bar.map((element) => (
                         <Bar
                              dataKey={element.datakey}
                              barSize={element.barSize}
                              fill={element.fill}
                         />
                    ))}
                    {line.map((element) => (
                         <Line
                              dataKey={element.datakey}
                              stroke={element.stroke}
                         />
                    ))}
               </ComposedChart>
          </ResponsiveContainer>
     );
};

export default ComposedChartComponent;
