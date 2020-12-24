import React from "react";
import { Box, Typography, Grid, Button } from "@material-ui/core";
import { CommentRounded } from "@material-ui/icons";
import { InputComponent } from "../../Components";

const CommentsComponent: React.FC = () => {
     // const [inputs, setInputs] = useState({
     //      name: "",
     //      email: "",
     //      body: "",
     // });

     // const handleInputs = (e) => {
     //      const value = e.target.value;
     //      setInputs({
     //           ...initial,
     //           [e.target.name]: value,
     //      });
     // };

     // const uploadComment = (e) => {
     //      e.preventDefault();
     //      props.onSubmit(inputs);
     //      setInputs({ name: "", email: "", body: "" });
     // };

     return (
          <Box>
               <Typography variant='h5'>
                    Whats your opinion for this...
               </Typography>
               <Box mt={3}>
                    <form>
                         <Grid container spacing={2}>
                              <Grid item xs={12} md={12}>
                                   <InputComponent
                                        type='text'
                                        label='Enter your name'
                                        variant='outlined'
                                        fullWidth
                                        name='name'
                                        id='name'
                                   />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                   <InputComponent
                                        type='email'
                                        label='Enter your email'
                                        variant='outlined'
                                        fullWidth
                                        name='email'
                                        id='email'
                                   />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                   <InputComponent
                                        type='text'
                                        label='What do you think about this picture?'
                                        variant='outlined'
                                        fullWidth
                                        multiline
                                        rows='4'
                                        name='body'
                                        id='body'
                                   />
                              </Grid>
                              <Grid item xs={12}>
                                   <Button
                                        variant='outlined'
                                        color='primary'
                                        type='submit'
                                        size='small'
                                        startIcon={<CommentRounded />}>
                                        Comment
                                   </Button>
                              </Grid>
                         </Grid>
                    </form>
               </Box>
          </Box>
     );
};

export default CommentsComponent;
