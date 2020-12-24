import React from "react";
import {
     Box,
     Button,
     Card,
     CardActionArea,
     CardActions,
     CardHeader,
     Dialog,
     DialogTitle,
     DialogContent,
     DialogContentText,
     DialogActions,
} from "@material-ui/core";
import { Albums } from "../../../types";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./styles";
import { DeleteRounded, EditRounded } from "@material-ui/icons";
import { AlbumService } from "services";
import { useSnackbar } from "notistack";

interface Props {
     ids: Albums["_id"];
     title: Albums["title"];
}

const AlbumCardComponent: React.FC<Props> = (props) => {
     const classes = useStyles();
     const history = useHistory();
     const { ids, title } = props;
     const notification = useSnackbar();

     const [open, setOpen] = React.useState(false);

     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };

     const deleteThisAlbum = async () => {
          await AlbumService.deleteSpacificAlbum(ids);
          await AlbumService.getAlbums();
          notification.enqueueSnackbar("Album deleted successfully", {
               variant: "success",
          });
          history.push("/albums");
     };

     return (
          <Box>
               <Box className='square'>
                    <Card className={classes.card}>
                         <CardActionArea>
                              <Link
                                   to={`/albums/${ids}`}
                                   className={classes.link}>
                                   <CardHeader title={title} />
                              </Link>
                              <CardActions>
                                   <Button
                                        variant='outlined'
                                        color='secondary'
                                        size='small'
                                        onClick={handleClickOpen}
                                        startIcon={<DeleteRounded />}>
                                        Delete
                                   </Button>
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
                                   <Button
                                        variant='outlined'
                                        color='primary'
                                        size='small'
                                        startIcon={<EditRounded />}>
                                        <Link
                                             to={`/albums/edit-albums/${ids}`}
                                             className={classes.link}>
                                             Edit
                                        </Link>
                                   </Button>
                              </CardActions>
                         </CardActionArea>
                    </Card>
               </Box>
          </Box>
     );
};

export default AlbumCardComponent;
