import React, { useEffect } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import Layout from "layouts";
import { useSelector } from "react-redux";
import { selectSingleAlbum } from "store/album/albums.selector";
import { AlbumService } from "services";
import { useHistory, useParams } from "react-router-dom";
import { InputComponent } from "Components";
import { Formik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";

interface Params {
     id: string;
}

const validationSchema = yup.object().shape({
     title: yup.string().required("Cannot submit with empty value"),
});

const EditAlbums: React.FC = () => {
     const data = useSelector(selectSingleAlbum);
     const params = useParams<Params>();
     const history = useHistory();
     const notification = useSnackbar();

     useEffect(() => {
          (async () => {
               await AlbumService.getAlbumById(params.id);
               // console.log("use effect value", album);
          })();
     }, [params.id]);

     const onSubmit = async (form: any) => {
          await AlbumService.updateAlbum(params.id, {
               title: form.title,
          });
          notification.enqueueSnackbar(
               `${data.title} album have been updated to ${form.title}!`,
               {
                    variant: "success",
               }
          );
          // console.log(form.title);
          history.push("/albums");
     };

     if (!data) {
          return (
               <Layout>
                    <Box mt={10}>
                         <Typography>No album found</Typography>
                    </Box>
               </Layout>
          );
     }

     return (
          <Layout>
               <Box p={3} mt={10}>
                    <Formik
                         initialValues={data}
                         onSubmit={onSubmit}
                         validationSchema={validationSchema}>
                         {({
                              handleBlur,
                              handleSubmit,
                              handleChange,
                              errors,
                              values,
                              touched,
                         }) => (
                              <form onSubmit={handleSubmit}>
                                   <InputComponent
                                        variant='outlined'
                                        color='primary'
                                        name='title'
                                        id='title'
                                        label='Change album'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        helperText={
                                             touched.title && errors.title
                                        }
                                        error={
                                             touched.title &&
                                             Boolean(errors.title)
                                        }
                                        fullWidth
                                   />
                                   <Box mt={2}>
                                        <Button
                                             type='submit'
                                             variant='outlined'
                                             color='primary'>
                                             Save
                                        </Button>
                                   </Box>
                              </form>
                         )}
                    </Formik>
               </Box>
          </Layout>
     );
};

export default EditAlbums;
