import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PhotoService } from "services";
import { Box, Grid, TextField, Button, Typography } from "@material-ui/core";
import {
     CommentCardComponent,
     CommentLoader,
     PhotoLoader,
     PreviewImageComponent,
} from "../../../Components/";
import Layout from "layouts";
import { useSelector } from "react-redux";
import { selectComments, selectSinglePhoto } from "store/photo/photo.selector";
import * as yup from "yup";
import { Formik } from "formik";
import useStyles from "./styles";
import { useSnackbar } from "notistack";

interface Params {
     id: string;
}

interface IForm {
     name: string;
     email: string;
     body: string;
}

const initialForm: IForm = {
     name: "",
     body: "",
     email: "",
};

const validationSchema = yup.object().shape({
     name: yup.string().required("Your name required"),
     body: yup.string().required("Comment is required"),
     email: yup.string().email().required("Email is needed"),
});

const SinglePhoto: React.FC = () => {
     const data = useSelector(selectSinglePhoto);
     const comment = useSelector(selectComments);
     const [loading, setLoading] = useState(true);
     const params = useParams<Params>();
     const classes = useStyles();
     const notification = useSnackbar();

     useEffect(() => {
          (async () => {
               setLoading(true);
               await PhotoService.getPhotoById(params.id);
               // console.log(photo);
               setLoading(false);
          })();
     }, [params.id]);

     const onSubmit = async (form: any, { resetForm }) => {
          await PhotoService.uploadNewComment(
               {
                    name: form.name,
                    email: form.email,
                    body: form.body,
                    postId: params.id,
               },
               params.id
          );
          await PhotoService.getCommentsByPhotoId(params.id);
          notification.enqueueSnackbar("Thanks for comment...", {
               variant: "success",
          });
          resetForm({});
     };

     useEffect(() => {
          (async () => {
               setLoading(true);
               await PhotoService.getCommentsByPhotoId(params.id);
               // console.log(comment);
               setLoading(false);
          })();
     }, [params.id]);

     return (
          <Layout>
               <Box p={5}>
                    {loading && (
                         <Grid container spacing={5}>
                              <Grid item xs={12} md={6} lg={6}>
                                   <Box mt={10}>
                                        <PhotoLoader />
                                   </Box>
                              </Grid>
                              <Grid item xs={12} md={6} lg={6}>
                                   <Box mt={10}>
                                        <CommentLoader />
                                   </Box>
                              </Grid>
                         </Grid>
                    )}
                    {!loading && data && (
                         <Box mb={5}>
                              <Grid container spacing={5} justify='center'>
                                   <Grid item xs={12} md={12} lg={6}>
                                        <Box mt={6}>
                                             <PreviewImageComponent />
                                        </Box>
                                   </Grid>

                                   <Grid item xs={12} md={12} lg={6}>
                                        <Box>
                                             <Box mt={5}>
                                                  <Formik
                                                       validationSchema={
                                                            validationSchema
                                                       }
                                                       initialValues={
                                                            initialForm
                                                       }
                                                       onSubmit={onSubmit}>
                                                       {({
                                                            handleSubmit,
                                                            values,
                                                            touched,
                                                            handleBlur,
                                                            handleChange,
                                                            errors,
                                                       }) => (
                                                            <form
                                                                 onSubmit={
                                                                      handleSubmit
                                                                 }>
                                                                 <Grid
                                                                      container
                                                                      spacing={
                                                                           2
                                                                      }>
                                                                      <Grid
                                                                           item
                                                                           xs={
                                                                                12
                                                                           }
                                                                           md={
                                                                                12
                                                                           }>
                                                                           <TextField
                                                                                type='text'
                                                                                label='Enter your name'
                                                                                variant='standard'
                                                                                fullWidth
                                                                                name='name'
                                                                                id='name'
                                                                                value={
                                                                                     values.name
                                                                                }
                                                                                onChange={
                                                                                     handleChange
                                                                                }
                                                                                onBlur={
                                                                                     handleBlur
                                                                                }
                                                                                helperText={
                                                                                     touched.name &&
                                                                                     errors.name
                                                                                }
                                                                                error={
                                                                                     touched.name &&
                                                                                     Boolean(
                                                                                          errors.name
                                                                                     )
                                                                                }
                                                                           />
                                                                      </Grid>
                                                                      <Grid
                                                                           item
                                                                           xs={
                                                                                12
                                                                           }
                                                                           md={
                                                                                12
                                                                           }>
                                                                           <TextField
                                                                                type='email'
                                                                                label='Enter your email'
                                                                                variant='standard'
                                                                                fullWidth
                                                                                name='email'
                                                                                id='email'
                                                                                value={
                                                                                     values.email
                                                                                }
                                                                                onChange={
                                                                                     handleChange
                                                                                }
                                                                                onBlur={
                                                                                     handleBlur
                                                                                }
                                                                                helperText={
                                                                                     touched.email &&
                                                                                     errors.email
                                                                                }
                                                                                error={
                                                                                     touched.email &&
                                                                                     Boolean(
                                                                                          errors.email
                                                                                     )
                                                                                }
                                                                           />
                                                                      </Grid>
                                                                      <Grid
                                                                           item
                                                                           xs={
                                                                                12
                                                                           }
                                                                           md={
                                                                                12
                                                                           }>
                                                                           <TextField
                                                                                type='text'
                                                                                label='What do you think about this picture?'
                                                                                variant='standard'
                                                                                fullWidth
                                                                                multiline
                                                                                rows='4'
                                                                                name='body'
                                                                                id='body'
                                                                                value={
                                                                                     values.body
                                                                                }
                                                                                onBlur={
                                                                                     handleBlur
                                                                                }
                                                                                onChange={
                                                                                     handleChange
                                                                                }
                                                                                helperText={
                                                                                     touched.body &&
                                                                                     errors.body
                                                                                }
                                                                                error={
                                                                                     touched.body &&
                                                                                     Boolean(
                                                                                          errors.body
                                                                                     )
                                                                                }
                                                                           />
                                                                      </Grid>
                                                                      <Grid
                                                                           item
                                                                           xs={
                                                                                12
                                                                           }>
                                                                           <Button
                                                                                variant='outlined'
                                                                                color='primary'
                                                                                type='submit'
                                                                                size='small'>
                                                                                Submit
                                                                           </Button>
                                                                      </Grid>
                                                                 </Grid>
                                                            </form>
                                                       )}
                                                  </Formik>
                                             </Box>
                                             <Box mt={5}>
                                                  <Typography variant='h5'>
                                                       Comments
                                                  </Typography>
                                             </Box>
                                             {!loading && comment.length ? (
                                                  comment.map((element) => (
                                                       <Box key={element._id}>
                                                            <CommentCardComponent
                                                                 id={
                                                                      element._id
                                                                 }
                                                                 postId={
                                                                      element.postId
                                                                 }
                                                                 name={
                                                                      element.name
                                                                 }
                                                                 email={
                                                                      element.email
                                                                 }
                                                                 body={
                                                                      element.body
                                                                 }
                                                            />
                                                       </Box>
                                                  ))
                                             ) : (
                                                  <Grid item xs={12}>
                                                       <Box
                                                            p={5}
                                                            mt={10}
                                                            className={
                                                                 classes.nodata
                                                            }>
                                                            <Typography
                                                                 variant='h5'
                                                                 color='textSecondary'>
                                                                 Be the first
                                                                 comment for
                                                                 this photo!
                                                            </Typography>
                                                       </Box>
                                                  </Grid>
                                             )}
                                        </Box>
                                   </Grid>
                              </Grid>
                         </Box>
                    )}
               </Box>
          </Layout>
     );
};
export default SinglePhoto;
