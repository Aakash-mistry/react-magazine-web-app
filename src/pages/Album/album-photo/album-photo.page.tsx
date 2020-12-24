import React, { useState, useEffect } from "react";
import {
     Box,
     Grid,
     Typography,
     Button,
     Dialog,
     DialogContent,
     DialogTitle,
     DialogActions,
     DialogContentText,
} from "@material-ui/core";
import { AlbumLoader, PhotoCardComponent, PhotoLoader } from "Components";
import { AlbumService } from "services";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
     selectPhotosByAlbum,
     selectSingleAlbum,
} from "store/album/albums.selector";
import {
     DeleteRounded,
     EditRounded,
     HomeRounded,
     KeyboardBackspaceRounded,
} from "@material-ui/icons";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
     return createStyles({
          heading: {
               textAlign: "center",
               marginTop: 10,
               marginBottom: 10,
               color: "dodgerblue",
               fontWeight: 900,
          },
          Link: {
               textDecoration: "none",
               color: "auto",
               marginLeft: 5,
          },
          buttons: {
               marginTop: 20,
               marginBottom: 10,
               textAlign: "center",
          },
          emptyPhoto: {
               marginTop: 100,
               textAlign: "center",
               maxWidth: "50%",
               width: "100%",
          },
          centerThings: {
               textAlign: "center",
          },
          warning: {
               marginTop: 100,
          },
     });
});

interface Params {
     id: string;
}
const AlbumPhotoPage: React.FC = () => {
     const albums = useSelector(selectSingleAlbum);
     const data = useSelector(selectPhotosByAlbum);
     const [loading, setLoading] = useState<boolean>(true);
     const params = useParams<Params>();
     const classes = useStyles();
     const [open, setOpen] = React.useState(false);
     const history = useHistory();

     // Album delete selection
     const deleteThisAlbum = async () => {
          await AlbumService.deleteSpacificAlbum(params.id);

          await AlbumService.getAlbums();
          history.push("/albums");
     };

     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };

     useEffect(() => {
          (async () => {
               setLoading(true);
               await AlbumService.getAlbumById(params.id);
               // setAlbums(response);
               setLoading(false);
          })();
     }, [params.id]);

     useEffect(() => {
          (async () => {
               setLoading(true);
               await AlbumService.getPhotosByAlbums(params.id);
               // console.log(photos);
               setLoading(false);
          })();
     }, [params.id]);

     return (
          <Box p={2}>
               {loading ? (
                    <Box>
                         <Grid container>
                              <Grid item xs={12} md={12}>
                                   <AlbumLoader />
                              </Grid>
                         </Grid>

                         <Grid container spacing={3}>
                              <Grid item xs={12} md={3} lg={3}>
                                   <PhotoLoader />
                              </Grid>
                              <Grid item xs={12} md={3} lg={3}>
                                   <PhotoLoader />
                              </Grid>
                              <Grid item xs={12} md={3} lg={3}>
                                   <PhotoLoader />
                              </Grid>
                              <Grid item xs={12} md={3} lg={3}>
                                   <PhotoLoader />
                              </Grid>
                         </Grid>
                    </Box>
               ) : null}
               {!loading && Boolean(albums) && (
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={12}>
                              <Box className={classes.heading}>
                                   <Typography variant='h1' component='header'>
                                        {albums.title}
                                   </Typography>
                              </Box>
                              <Box className={classes.buttons}>
                                   <Link to='/'>
                                        <Button variant='text'>
                                             <HomeRounded />
                                        </Button>
                                   </Link>
                                   <Link to='/albums'>
                                        <Button variant='text'>
                                             <KeyboardBackspaceRounded />
                                        </Button>
                                   </Link>
                                   <Button
                                        variant='text'
                                        color='secondary'
                                        onClick={handleClickOpen}>
                                        <DeleteRounded />
                                   </Button>
                                   <Link
                                        className={classes.Link}
                                        to={`/albums/edit-albums/${albums._id}`}>
                                        <Button variant='text' color='primary'>
                                             {<EditRounded />}
                                        </Button>
                                   </Link>
                                   <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby='form-dialog-title'>
                                        <DialogTitle id='form-dialog-title'>
                                             Warning
                                        </DialogTitle>
                                        <DialogContent>
                                             <DialogContentText>
                                                  By deleting this album all
                                                  photos which is saved in this
                                                  will also be deleted
                                             </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                             <Button
                                                  onClick={handleClose}
                                                  color='primary'>
                                                  Cancel
                                             </Button>
                                             <Button
                                                  onClick={deleteThisAlbum}
                                                  color='primary'>
                                                  Delete
                                             </Button>
                                        </DialogActions>
                                   </Dialog>
                              </Box>
                         </Grid>
                         <Grid item xs={12} md={12}>
                              <Grid container spacing={3}>
                                   {data && data.length ? (
                                        data.map((element) => (
                                             <Grid
                                                  item
                                                  key={element._id}
                                                  xs={12}
                                                  md={3}>
                                                  <Box mt={2} key={element._id}>
                                                       <PhotoCardComponent
                                                            _id={element._id}
                                                            title={
                                                                 element.title
                                                            }
                                                            thumbnailUrl={
                                                                 element.thumbnailUrl
                                                            }
                                                       />
                                                  </Box>
                                             </Grid>
                                        ))
                                   ) : (
                                        <Box p={1}>
                                             <Grid container spacing={3}>
                                                  <Grid
                                                       className={
                                                            classes.centerThings
                                                       }
                                                       item
                                                       xs={12}
                                                       lg={6}
                                                       md={6}>
                                                       <img
                                                            className={
                                                                 classes.emptyPhoto
                                                            }
                                                            src='https://miro.medium.com/max/2736/1*bkUuTl6-0KCnGnfvo22X_A.png'
                                                            alt=''
                                                       />
                                                  </Grid>
                                                  <Grid
                                                       className={
                                                            classes.centerThings
                                                       }
                                                       item
                                                       xs={12}
                                                       md={6}
                                                       lg={6}>
                                                       <Typography
                                                            variant='h5'
                                                            className={
                                                                 classes.warning
                                                            }>
                                                            For making album
                                                            things just go on
                                                            home click on <br />
                                                            <b>bookmark</b> icon
                                                            and select <br />
                                                            {albums.title} from
                                                            the list
                                                       </Typography>
                                                       <Link
                                                            to='/'
                                                            className={
                                                                 classes.Link
                                                            }>
                                                            <Button
                                                                 startIcon={
                                                                      <HomeRounded />
                                                                 }>
                                                                 Go back to home
                                                            </Button>
                                                       </Link>
                                                  </Grid>
                                             </Grid>
                                        </Box>
                                   )}
                              </Grid>
                         </Grid>
                    </Grid>
               )}
          </Box>
     );
};

export default AlbumPhotoPage;
