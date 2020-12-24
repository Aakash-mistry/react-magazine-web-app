import React, { useEffect, useState } from "react";
import { PhotoService } from "services";
import { Photo } from "types";
// import useStyles from "./ShowPhoto.styles";
import { Grid, Box, Typography } from "@material-ui/core";

// Importing Component
import CardComponent from "components/";
import PhotoLoader from "components/Loaders/photo-loader";

const ShowPhotos: React.FC = (props) => {
     const [data, setData] = useState<Photo[]>([]);
     const [loading, setLoading] = useState<boolean>(true);

     // useEffect state manage
     useEffect(() => {
          (async () => {
               const response = await PhotoService.getPhotos();
               if (response) {
                    setLoading(false);
                    setData(response);
               } else {
                    setLoading(true);
                    setData(null);
               }
          })();
     }, []);

     // Stylings
     return (
          <Box>
               {loading && (
                    <Box p={2} mt={10}>
                         <Grid container spacing={4}>
                              <Grid item xs={12} md={4}>
                                   <PhotoLoader />
                              </Grid>
                              <Grid item xs={12} md={4}>
                                   <PhotoLoader />
                              </Grid>
                              <Grid item xs={12} md={4}>
                                   <PhotoLoader />
                              </Grid>
                              <Grid item xs={12} md={4}>
                                   <PhotoLoader />
                              </Grid>
                              <Grid item xs={12} md={4}>
                                   <PhotoLoader />
                              </Grid>
                              <Grid item xs={12} md={4}>
                                   <PhotoLoader />
                              </Grid>
                         </Grid>
                    </Box>
               )}

               {!loading && data.length && (
                    <Box p={2}>
                         <Typography
                              variant='h4'
                              style={{
                                   textAlign: "center",
                                   marginTop: 80,
                                   marginBottom: 30,
                              }}>
                              Photo gallery
                         </Typography>
                         <Grid container spacing={4} justify='center'>
                              {data.map((element) => (
                                   <Grid item xs={12} md={4} key={element.id}>
                                        <CardComponent
                                             thumbnailUrl={element.thumbnailUrl}
                                             title={element.title}
                                             url={element.url}
                                             id={element.id}
                                             albumId={element.albumId}
                                        />
                                   </Grid>
                              ))}
                         </Grid>
                    </Box>
               )}
          </Box>
     );
};

export default ShowPhotos;
