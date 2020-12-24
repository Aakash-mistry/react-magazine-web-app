import { Box, Grid, Typography } from "@material-ui/core";
import {
     PieChartComponent,
     RadarChartComponent,
     ScatterChartComponent,
} from "Components/Chart";
import ChartData from "../../Components/Chart/ChartData/ChartData";
import OtherChartData from "../../Components/Chart/ChartData/OtherChartData";
import PieData from "../../Components/Chart/ChartData/PieData";
import PieData02 from "../../Components/Chart/ChartData/PieData02";
import Layout from "layouts";
import React from "react";
import {
     ChartComponent,
     AreaChartComponent,
     BarChartComponent,
     ComposedChartComponent,
     RadialChartComponent,
} from "../../Components/";
import RadarData from "Components/Chart/ChartData/RadarData";
import RadialData from "Components/Chart/ChartData/RadialData";

const ChartPage: React.FC = () => {
     const data = ChartData;
     const dataTwo = OtherChartData;
     const data01 = PieData;
     const data02 = PieData02;
     const data03 = RadarData;
     const data04 = RadialData;
     return (
          <Layout>
               <Box mt={10} p={2}>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <Typography
                                   variant='h5'
                                   style={{ textAlign: "center" }}>
                                   Simple line chart
                              </Typography>
                              <ChartComponent
                                   data={data}
                                   xAxis='language'
                                   line={[{ dataKey: "pop", stroke: "green" }]}
                                   height={400}
                              />
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <Typography
                                   variant='h5'
                                   style={{ textAlign: "center" }}>
                                   Area chart
                              </Typography>
                              <AreaChartComponent
                                   data={data}
                                   xAxis='language'
                                   areas={[
                                        {
                                             dataKey: "pop",
                                             stroke: "green",
                                             fill: "red",
                                        },
                                   ]}
                                   height={400}
                              />
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <Typography
                                   variant='h5'
                                   style={{ textAlign: "center" }}>
                                   Bar chart
                              </Typography>
                              <BarChartComponent
                                   data={data}
                                   xAxis='language'
                                   bar={[
                                        {
                                             datakey: "pop",
                                             fill: "#00bcd4",
                                        },
                                   ]}
                                   height={400}
                              />
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <Typography
                                   variant='h5'
                                   style={{ textAlign: "center" }}>
                                   Composed chart
                              </Typography>
                              <ComposedChartComponent
                                   data={data}
                                   xAxis='language'
                                   bar={[
                                        {
                                             datakey: "pop",
                                             fill: "#2196f3",
                                             barSize: 30,
                                        },
                                   ]}
                                   line={[
                                        {
                                             datakey: "pop",
                                             stroke: "#009688",
                                        },
                                   ]}
                                   height={400}
                              />
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <Typography
                                   variant='h5'
                                   style={{ textAlign: "center" }}>
                                   Scatter chart
                              </Typography>
                              {console.log("Chart page", dataTwo)}
                              <ScatterChartComponent
                                   data={dataTwo}
                                   height={300}
                                   xAxis={[
                                        {
                                             datakey: "x",
                                             name: "stature",
                                             unit: "cm",
                                        },
                                   ]}
                                   yAxis={[
                                        {
                                             datakey: "y",
                                             name: "weight",
                                             unit: "kg",
                                        },
                                   ]}
                                   scatter={[
                                        {
                                             // data: { dataTwo },
                                             fill: "grey",
                                             name: "The school data",
                                        },
                                   ]}
                              />
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <Typography
                                   variant='h5'
                                   style={{ textAlign: "center" }}>
                                   Pie chart
                              </Typography>
                              <PieChartComponent
                                   innerChart={[
                                        {
                                             dataKey: "value",
                                             startAngle: 180,
                                             endAngle: 0,
                                             cx: 250,
                                             data: data02,
                                             cy: 250,
                                             innerRadius: 70,
                                             outerRadius: 90,
                                             fill: "#333",
                                        },
                                   ]}
                                   outerChart={[
                                        {
                                             dataKey: "value",
                                             startAngle: 180,
                                             endAngle: 0,
                                             data: data01,
                                             cx: 250,
                                             cy: 250,
                                             outerRadius: 60,
                                             fill: "grey",
                                        },
                                   ]}
                                   height={400}
                                   width={400}
                              />
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <Typography
                                   variant='h5'
                                   style={{ textAlign: "center" }}>
                                   Radar chart
                              </Typography>
                              <RadarChartComponent
                                   cx={300}
                                   cy={250}
                                   outerRadius={150}
                                   width={500}
                                   height={500}
                                   data={data03}
                                   polarAxis='subject'
                                   radar={[
                                        {
                                             name: "Mike",
                                             datakey: "A",
                                             stroke: "#333",
                                             fill: "#8884d8",
                                             fillOpacity: "0.6",
                                        },
                                   ]}
                              />
                         </Grid>
                         <Grid item xs={12} md={4}>
                              <Typography
                                   variant='h5'
                                   style={{ textAlign: "center" }}>
                                   Simple radial chart
                              </Typography>
                              <RadialChartComponent
                                   cx={150}
                                   cy={150}
                                   innerRadius={20}
                                   outerRadius={140}
                                   barSize={10}
                                   data={data04}
                                   radialBar={[{ datakey: "uv" }]}
                                   legand={[
                                        {
                                             iconSize: 10,
                                             width: 120,
                                             height: 140,
                                        },
                                   ]}
                                   height={300}
                              />
                         </Grid>
                    </Grid>
               </Box>
          </Layout>
     );
};

export default ChartPage;
