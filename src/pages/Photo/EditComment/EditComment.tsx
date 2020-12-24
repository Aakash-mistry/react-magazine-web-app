import React, { useEffect } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { PhotoService } from "services";
import { useHistory, useParams } from "react-router-dom";
import Layout from "layouts";
//! import { useSelector } from "react-redux";
//! import { selectSingleComment } from "store/photo/photo.selector";
import { Formik } from "formik";
import * as yup from "yup";

interface Params {
     id: string;
}

interface IForm {
     name: any;
     email: any;
     body: any;
}

const initialValues: IForm = {
     name: "",
     email: "",
     body: "",
};

const validationSchema = yup.object().shape({
     name: yup.string().required("Your name cannot be empty"),
     email: yup.string().email().required("Email is required"),
     body: yup.string().required("Comment is a main part cannot be empty"),
});

const EditCommentPage: React.FC = () => {
     //! const comments = useSelector(selectSingleComment);
     const params = useParams<Params>();
     const history = useHistory();

     useEffect(() => {
          (async () => {
               await PhotoService.getCommentById(params.id);
          })();
     }, [params.id]);

     const onSubmit = async (form: any) => {
          await PhotoService.editComment(params.id, {
               name: form.name,
               email: form.email,
               body: form.body,
          });
          history.push(`/photos`);
     };

     return (
          <Layout>
               <Box p={5} mt={10}>
                    <Formik
                         initialValues={initialValues}
                         validationSchema={validationSchema}
                         onSubmit={onSubmit}>
                         {({
                              handleSubmit,
                              handleBlur,
                              handleChange,
                              values,
                              touched,
                              errors,
                         }) => (
                              <form onSubmit={handleSubmit}>
                                   <TextField
                                        label='Enter name'
                                        value={values.name}
                                        name='name'
                                        id='name'
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={touched.name && errors.name}
                                        error={
                                             touched.name &&
                                             Boolean(errors.name)
                                        }
                                   />
                                   <TextField
                                        label='Enter email'
                                        name='email'
                                        id='email'
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        helperText={
                                             touched.email && errors.email
                                        }
                                        error={
                                             touched.email &&
                                             Boolean(errors.email)
                                        }
                                   />
                                   <TextField
                                        label='Change comment'
                                        name='body'
                                        id='body'
                                        fullWidth
                                        multiline
                                        rows='4'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.body}
                                        helperText={touched.body && errors.body}
                                        error={
                                             touched.body &&
                                             Boolean(errors.body)
                                        }
                                   />
                                   <Box mt={2}>
                                        <Button
                                             type='submit'
                                             variant='outlined'
                                             color='primary'>
                                             Update
                                        </Button>
                                   </Box>
                              </form>
                         )}
                    </Formik>
               </Box>
          </Layout>
     );
};

export default EditCommentPage;
