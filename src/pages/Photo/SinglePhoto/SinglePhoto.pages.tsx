import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PhotoService } from "services";
import { Photo, Comment } from "../../../types";
import { Box, Grid } from "@material-ui/core";
import useStyles from "../ShowPhoto.styles";

// Importing component
import CardLoader from "components/Loaders/photo-loader";
import { CommentLoader } from "components/CommentComponent";
import SinglePhotoComponent from "components/card/";
import { CommentComponent } from "components/CommentComponent/";

interface Params {
     id: string;
}

const SinglePhoto: React.FC = (props) => {
     const [data, setData] = useState<Photo | null>(null);
     const [comment, setComment] = useState<Comment[]>([]);
     const [loading, setLoading] = useState(true);
     const params = useParams<Params>();

     useEffect(() => {
          (async () => {
               setLoading(true);
               const response = await PhotoService.getPhotoById(params.id);
               setData(response);
               setLoading(false);
          })();
     }, []);

     useEffect(() => {
          (async () => {
               setLoading(true);
               const response = await PhotoService.getCommentsByPhotoId(
                    params.id
               );
               setComment(response);
               setLoading(false);
          })();
     }, []);

     // Stylings
     const classes = useStyles();
     return (
          <div style={{ padding: 10 }}>
               {loading && (
                    <Grid container>
                         <Grid item xs={12} md={5}>
                              <CardLoader />
                         </Grid>
                         <Grid item xs={12} md={7}>
                              <CommentLoader />
                         </Grid>
                    </Grid>
               )}
               {!loading && data && (
                    <Box mb={5}>
                         <Grid container spacing={10}>
                              <Grid item xs={12} md={5}>
                                   <Box mt={10}>
                                        <SinglePhotoComponent
                                             thumbnailUrl={data.thumbnailUrl}
                                             title={data.title}
                                             url={data.url}
                                             id={data.id}
                                             albumId={data.albumId}
                                        />
                                   </Box>
                              </Grid>
                              <Grid item xs={12} md={7}>
                                   <Box mt={10} flex>
                                        {comment.map((element) => (
                                             <Box key={element.id}>
                                                  <CommentComponent
                                                       id={element.id}
                                                       postId={element.postId}
                                                       name={element.name}
                                                       email={element.email}
                                                       body={element.body}
                                                  />
                                             </Box>
                                        ))}
                                   </Box>
                              </Grid>
                         </Grid>
                    </Box>
               )}
          </div>
     );
};
export default SinglePhoto;
