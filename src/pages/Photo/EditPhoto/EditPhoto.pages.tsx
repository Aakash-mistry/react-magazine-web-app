import React, { useEffect } from "react";
import { Box, TextField, Button, Typography } from "@material-ui/core";
import Layout from "layouts";
import { Formik } from "formik";
import * as yup from "yup";
import { useHistory, useParams } from "react-router-dom";
import { selectSinglePhoto } from "store/photo/photo.selector";
import { useSelector } from "react-redux";
import { PhotoService } from "services";

interface Params {
     id: string;
}

const validationSchema = yup.object().shape({
     title: yup.string().required("Title is cannot be empty"),
     thumbnailUrl: yup
          .string()
          .required("Image url is required for showing on card"),
});

const EditPhotoPage: React.FC = () => {
     const data = useSelector(selectSinglePhoto);
     const params = useParams<Params>();
     const history = useHistory();

     useEffect(() => {
          (async () => {
               await PhotoService.getPhotoById(params.id);
          })();
     }, [params.id]);

     const onSubmit = async (form: any) => {
          await PhotoService.updatePhoto(params.id, {
               title: form.title,
               thumbnailUrl: form.thumbnailUrl,
          });
          history.push(`/photos/${params.id}`);
     };

     if (!data) {
          return (
               <Layout>
                    <Box mt={10}>
                         <Typography>No photo found</Typography>
                    </Box>
               </Layout>
          );
     }

     return (
          <Layout>
               <Box mt={10} p={2}>
                    <Typography variant='h5'>Edit {data.title}</Typography>
                    <Formik
                         initialValues={data}
                         onSubmit={onSubmit}
                         validationSchema={validationSchema}>
                         {({
                              handleBlur,
                              handleChange,
                              handleSubmit,
                              values,
                              errors,
                              touched,
                         }) => (
                              <form onSubmit={handleSubmit}>
                                   <Box p={1}>
                                        <TextField
                                             name='title'
                                             id='title'
                                             fullWidth
                                             label='Update name'
                                             variant='outlined'
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
                                        />
                                   </Box>
                                   <Box p={1}>
                                        <TextField
                                             name='thumbnailUrl'
                                             id='thumbnailUrl'
                                             fullWidth
                                             label='Update image'
                                             variant='outlined'
                                             onChange={handleChange}
                                             onBlur={handleBlur}
                                             value={values.thumbnailUrl}
                                             helperText={
                                                  touched.thumbnailUrl &&
                                                  errors.thumbnailUrl
                                             }
                                             error={
                                                  touched.thumbnailUrl &&
                                                  Boolean(errors.thumbnailUrl)
                                             }
                                        />
                                   </Box>
                                   <Box p={1}>
                                        <Button
                                             type='submit'
                                             variant='outlined'
                                             color='primary'
                                             size='small'>
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

export default EditPhotoPage;
