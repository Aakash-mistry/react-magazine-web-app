import React, { useEffect, useState } from "react";
import { AlbumService } from "../../../services";
import { Grid, Box } from "@material-ui/core";
import { Albums } from "../../../types";

// Import component
import AlbumCard from "components/albumComponent/Album.component";
import AlbumLoader from "components/albumComponent/loader/Album.loader";

const Album: React.FC = (props) => {
     const [data, setData] = useState<Albums[]>([]);
     const [loading, setLoading] = useState<boolean>(true);

     useEffect(() => {
          (async () => {
               const response = await AlbumService.getAlbums();
               if (response) {
                    setLoading(false);
                    setData(response);
               } else {
                    setLoading(true);
                    setData(null);
               }
          })();
     }, []);
     return (
          <Box mt={10} p={5}>
               {loading && (
                    <Grid container spacing={2}>
                         <AlbumLoader />
                         <AlbumLoader />
                         <AlbumLoader />
                         <AlbumLoader />
                         <AlbumLoader />
                         <AlbumLoader />
                    </Grid>
               )}
               {!loading && data.length && (
                    <Grid container spacing={3}>
                         {data.map((element) => (
                              <Grid item xs={12} md={4}>
                                   <AlbumCard
                                        id={element.id}
                                        title={element.title}
                                        userId={element.userId}
                                   />
                              </Grid>
                         ))}
                    </Grid>
               )}
          </Box>
     );
};

export default Album;
