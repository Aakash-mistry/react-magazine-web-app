import React from "react";
import { Box, Grid, Button, TextField } from "@material-ui/core";
import Layout from "layouts";
import { CloudUpload } from "@material-ui/icons";
import { AlbumService } from "services";
import { Formik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

interface IForm {
     title: string;
}

const initialFormValue: IForm = {
     title: "",
};

const validationSchema = yup.object().shape({
     title: yup
          .string()
          .max(12)
          .min(3)
          .required("Title is required for creating the album"),
});

const NewAlbumComponent: React.FC = () => {
     const notification = useSnackbar();
     const history = useHistory();

     const onSubmittingForm = async (form: any) => {
          await AlbumService.createNewAlbum({ title: form.title });
          notification.enqueueSnackbar(`${form.title} Album created!`, {
               variant: "success",
          });
          history.push("/albums");
     };

     return (
          <Layout>
               <Box mt={10} p={3}>
                    <Formik
                         validationSchema={validationSchema}
                         onSubmit={onSubmittingForm}
                         initialValues={initialFormValue}>
                         {({
                              handleSubmit,
                              values,
                              touched,
                              errors,
                              handleBlur,
                              handleChange,
                         }) => (
                              <form onSubmit={handleSubmit}>
                                   <Grid container spacing={2} justify='center'>
                                        <Grid item xs={12} md={3}></Grid>
                                        <Grid item xs={12} md={6}>
                                             <TextField
                                                  type='text'
                                                  label='Enter title'
                                                  variant='outlined'
                                                  fullWidth
                                                  name='title'
                                                  id='title'
                                                  onChange={handleChange}
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
                                             />
                                        </Grid>
                                        <Grid item xs={12} md={3}></Grid>
                                        <Grid item xs={12} md={6}>
                                             <Button
                                                  type='submit'
                                                  size='small'
                                                  variant='outlined'
                                                  startIcon={<CloudUpload />}>
                                                  Submit
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

export default NewAlbumComponent;
