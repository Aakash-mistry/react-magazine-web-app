import React, { useState, useCallback } from "react";
import {
     AppBar,
     Toolbar,
     Typography,
     Button,
     Box,
     Drawer,
     List,
     ListItem,
     Dialog,
     DialogTitle,
     DialogContent,
     DialogContentText,
     DialogActions,
     CircularProgress,
} from "@material-ui/core";
import {
     CloudUploadRounded,
     HomeRounded,
     PhotoAlbumRounded,
     BarChartRounded,
     InboxRounded,
} from "@material-ui/icons";
import useStyles from "./Navbar.styles";
import { Link } from "react-router-dom";
import { storage } from "config/firebase";
import { nanoid } from "nanoid";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import clsx from "clsx";

const Navbar: React.FC = ({ children }) => {
     const classes = useStyles();
     const [open, setOpen] = React.useState(false);
     const onDrop = useCallback((acceptedFile) => {
          acceptedFile.forEach((file) => {
               const reader = new FileReader();

               reader.onabort = () => console.log("file reading aborted");
               reader.onerror = () => console.log("file reading is error");
               reader.onload = () => {
                    const birneryStr = reader.result;
                    console.log("File from binery", birneryStr);
               };
               reader.readAsArrayBuffer(file);
          });
     }, []);

     const { getRootProps, getInputProps } = useDropzone({
          onDrop,
     });

     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };

     // firebase useStates
     const allInputs = { imgUrl: "" };
     const [imageAsFile, setImageAsFile] = useState<any>(null);
     const [imageAsUrl, setImageAsUrl] = useState(allInputs);
     const [loading, setLoading] = React.useState(false);
     const [success, setSuccess] = React.useState(false);
     const timer = React.useRef<number>();
     const buttonClassname = clsx({
          [classes.buttonSuccess]: success,
     });
     const changedName = nanoid();

     const handleImageFile = (e) => {
          const image = e.target.files[0];
          setImageAsFile(image);
          console.log(`${changedName}-${image.name}`);
     };

     React.useEffect(() => {
          return () => {
               clearTimeout(timer.current);
          };
     }, []);

     const handleButtonClick = () => {
          if (!loading) {
               setSuccess(false);
               setLoading(true);
               timer.current = window.setTimeout(() => {
                    setSuccess(true);
                    setLoading(false);
               }, 2000);
          }
     };

     // Firebase file handler
     const handleFirebaseUpload = (e) => {
          e.preventDefault();
          const uploadTask = storage
               .ref(`/react-training/${nanoid()}-${imageAsFile.name}`)
               .put(imageAsFile);

          uploadTask.on(
               "state_changed",
               (snapShot) => {
                    console.log(snapShot);
                    const imageAsFile = Math.round(
                         (snapShot.bytesTransferred / snapShot.totalBytes) * 100
                    );
                    setImageAsFile(imageAsFile);
               },
               (err) => {
                    console.log(err);
               },
               () => {
                    storage
                         .ref("react-training")
                         .child(`${changedName}-${imageAsFile.name}`)
                         .getDownloadURL()
                         .then((fireBaseUrl) => {
                              setImageAsUrl((prevObject) => ({
                                   ...prevObject,
                                   imgUrl: fireBaseUrl,
                              }));
                         })
                         .catch((err) => {
                              console.log(err);
                         });
               }
          );
     };

     return (
          <React.Fragment>
               <AppBar position='fixed' className={classes.appBar}>
                    <Toolbar>
                         <Typography className={classes.logo} variant='h5'>
                              Magazine
                         </Typography>
                         <Box className={classes.navButtons}>
                              <Button
                                   variant='outlined'
                                   onClick={handleClickOpen}
                                   startIcon={<CloudUploadRounded />}>
                                   uplaod photo
                              </Button>
                              <Dialog
                                   open={open}
                                   onClose={handleClose}
                                   aria-labelledby='form-dialog-title'>
                                   <DialogTitle id='form-dialog-title'>
                                        Select photo
                                   </DialogTitle>
                                   <DialogContent>
                                        <DialogContentText>
                                             After uploafding the photo you can
                                             save it in albums you created!
                                        </DialogContentText>
                                        <Box {...getRootProps}>
                                             <form
                                                  onSubmit={
                                                       handleFirebaseUpload
                                                  }>
                                                  <Dropzone
                                                       onDrop={(
                                                            acceptedFiles
                                                       ) =>
                                                            console.log(
                                                                 acceptedFiles
                                                            )
                                                       }>
                                                       {({
                                                            getRootProps,
                                                            getInputProps,
                                                       }) => (
                                                            <section
                                                                 className={
                                                                      classes.dropZone
                                                                 }>
                                                                 <div
                                                                      {...getRootProps()}>
                                                                      <input
                                                                           name='file'
                                                                           type='file'
                                                                           onChange={
                                                                                handleImageFile
                                                                           }
                                                                           {...getInputProps()}
                                                                      />
                                                                      <Box>
                                                                           <InboxRounded />
                                                                           {
                                                                                Image
                                                                           }
                                                                      </Box>
                                                                      <p>
                                                                           Drag
                                                                           'n'
                                                                           drop
                                                                           some
                                                                           files
                                                                           here,
                                                                           or
                                                                           click
                                                                           to
                                                                           select
                                                                           files
                                                                      </p>
                                                                 </div>
                                                            </section>
                                                       )}
                                                  </Dropzone>
                                             </form>
                                        </Box>
                                   </DialogContent>
                                   <DialogActions>
                                        <Button
                                             onClick={handleClose}
                                             color='primary'>
                                             Cancel
                                        </Button>
                                        <Button
                                             type='submit'
                                             className={buttonClassname}
                                             disabled={loading}
                                             onClick={handleButtonClick}
                                             color='primary'>
                                             Upload
                                        </Button>
                                        {loading && (
                                             <CircularProgress
                                                  size={24}
                                                  className={
                                                       classes.buttonProgress
                                                  }
                                             />
                                        )}
                                   </DialogActions>
                              </Dialog>
                         </Box>
                    </Toolbar>
               </AppBar>
               <Drawer
                    className={classes.drawer}
                    variant='permanent'
                    classes={{
                         paper: classes.drawerPaper,
                    }}
                    anchor='left'>
                    <div className={classes.toolbar}>
                         <List>
                              <ListItem className={classes.centered}>
                                   <Button startIcon={<HomeRounded />}>
                                        <Link
                                             to='/'
                                             className={classes.navLinks}>
                                             Home
                                        </Link>
                                   </Button>
                              </ListItem>
                              <ListItem className={classes.centered}>
                                   <Button startIcon={<PhotoAlbumRounded />}>
                                        <Link
                                             to='/albums'
                                             className={classes.navLinks}>
                                             Albums
                                        </Link>
                                   </Button>
                              </ListItem>
                              <ListItem button className={classes.centered}>
                                   <Button startIcon={<BarChartRounded />}>
                                        <Link
                                             to='/charts'
                                             className={classes.navLinks}>
                                             Charts
                                        </Link>
                                   </Button>
                              </ListItem>
                         </List>
                    </div>
               </Drawer>
               <main className={classes.content}>{children}</main>
          </React.Fragment>
     );
};

export default Navbar;
