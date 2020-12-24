import React from "react";
import { Box, TextField, Button, Grid } from "@material-ui/core";
import Layout from "layouts";
import { PhotoService } from "services";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";

interface Iform {
     title: string;
     thumbnailUrl: string;
}

const initialValues: Iform = {
     title: "",
     thumbnailUrl: "",
};

const validationSchema = yup.object().shape({
     title: yup.string().required("Title is required for creating the photo"),
     thumbnailUrl: yup
          .string()
          .required("Title is required for creating the photo"),
});

const UploadPhotoPage: React.FC = () => {
     const notification = useSnackbar();
     const history = useHistory();

     const onSubmit = async (data: any) => {
          await PhotoService.uploadNewPhotos({
               title: data.title,
               thumbnailUrl: data.thumbnailUrl,
          });
          notification.enqueueSnackbar("New post is created!", {
               variant: "success",
          });
          history.push("/photos");
     };
     return (
          <Layout>
               <Box mt={10} p={2}>
                    <Formik
                         validationSchema={validationSchema}
                         onSubmit={onSubmit}
                         initialValues={initialValues}>
                         {({
                              handleChange,
                              handleSubmit,
                              handleBlur,
                              errors,
                              touched,
                              values,
                         }) => (
                              <form onSubmit={handleSubmit}>
                                   <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                             <TextField
                                                  type='text'
                                                  label='Display name'
                                                  variant='outlined'
                                                  color='primary'
                                                  fullWidth
                                                  name='title'
                                                  id='title'
                                                  value={values.title}
                                                  onBlur={handleBlur}
                                                  helperText={
                                                       touched.title &&
                                                       errors.title
                                                  }
                                                  error={
                                                       touched.title &&
                                                       Boolean(errors.title)
                                                  }
                                                  onChange={handleChange}
                                             />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                             <TextField
                                                  type='text'
                                                  label='Your image link will be here'
                                                  variant='outlined'
                                                  color='primary'
                                                  name='thumbnailUrl'
                                                  id='thumbnailUrl'
                                                  value={values.thumbnailUrl}
                                                  onBlur={handleBlur}
                                                  helperText={
                                                       touched.thumbnailUrl &&
                                                       errors.thumbnailUrl
                                                  }
                                                  error={
                                                       touched.thumbnailUrl &&
                                                       Boolean(
                                                            errors.thumbnailUrl
                                                       )
                                                  }
                                                  onChange={handleChange}
                                                  fullWidth
                                             />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                             <Button
                                                  type='submit'
                                                  size='small'
                                                  variant='outlined'>
                                                  Uplaod
                                             </Button>
                                        </Grid>
                                   </Grid>
                              </form>
                         )}
                    </Formik>
               </Box>
          </Layout>
     );
};

export default UploadPhotoPage;
