import {
     Box,
     Button,
     Card,
     CardMedia,
     CardActionArea,
     CardActions,
     Dialog,
     DialogActions,
     DialogTitle,
} from "@material-ui/core";
import React from "react";
import { Photo } from "../../../types";
import { PhotoService } from "services";
import { DeleteRounded, EditRounded } from "@material-ui/icons";
import DialogBox from "Components/DialogBox";
import { useParams, Link } from "react-router-dom";
import useStyles from "./styles";
import Lazyload from "react-lazyload";

interface Props {
     _id: Photo["_id"];
     title: Photo["title"];
     thumbnailUrl: Photo["thumbnailUrl"];
     createdAt?: Photo["createdAt"];
}

interface Params {
     id: string;
}

const PhotoCardComponent: React.FC<Props> = (props) => {
     const { _id, title, thumbnailUrl } = props;
     const params = useParams<Params>();
     const classes = useStyles();

     const [open, setOpen] = React.useState(false);

     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };

     // Action function
     const deletePhoto = async () => {
          await PhotoService.deleteSpacificPhoto(params.id);
          await PhotoService.getPhotos();
     };

     return (
          <Box p={2}>
               <Card>
                    <CardActionArea>
                         <Link to={`/photos/${_id}`}>
                              <Lazyload height={200} once={true}>
                                   <img
                                        src={thumbnailUrl}
                                        className={classes.photoCard}
                                        alt={title}
                                   />
                              </Lazyload>
                         </Link>
                    </CardActionArea>
                    <CardActions>
                         <Button
                              color='secondary'
                              size='small'
                              onClick={handleClickOpen}>
                              <DeleteRounded />
                         </Button>
                         <Dialog
                              open={open}
                              onClose={handleClose}
                              aria-labelledby='form-dialog-title'>
                              <DialogTitle id='form-dialog-title'>
                                   Comments of this photo were also deleted by
                                   this action
                              </DialogTitle>
                              <DialogActions>
                                   <Button
                                        onClick={handleClose}
                                        color='primary'>
                                        Cancel
                                   </Button>
                                   <Button
                                        onClick={deletePhoto}
                                        color='primary'>
                                        Delete
                                   </Button>
                              </DialogActions>
                         </Dialog>
                         <Link to={`/photos/edit/${_id}`}>
                              <Button color='primary' size='small'>
                                   <EditRounded />
                              </Button>
                         </Link>
                         <DialogBox />
                    </CardActions>
               </Card>
          </Box>
     );
};

export default PhotoCardComponent;
