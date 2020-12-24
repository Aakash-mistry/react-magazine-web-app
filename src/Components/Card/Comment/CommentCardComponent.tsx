import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { Comment } from "../../../types";
import { Link, useParams } from "react-router-dom";
import { PhotoService } from "services";
import { DeleteRounded, EditRounded } from "@material-ui/icons";
import useStyles from "./style";
import { useSnackbar } from "notistack";

interface Props {
     postId: Comment["postId"];
     id: Comment["_id"];
     name: Comment["name"];
     email: Comment["email"];
     body: Comment["body"];
}

interface Params {
     id: string;
}

const CommentCardComponent: React.FC<Props> = (props) => {
     const classes = useStyles();
     const { id, name, email, body } = props;
     const params = useParams<Params>();
     const notification = useSnackbar();

     const deleteComment = async () => {
          await PhotoService.deleteComment(id);
          await PhotoService.getCommentsByPhotoId(params.id);
          notification.enqueueSnackbar("Comment have been deleted!", {
               variant: "info",
          });
     };

     return (
          <Box className={classes.cardComment}>
               <Typography variant='h5' component='h2'>
                    {email}
               </Typography>
               <Typography variant='body2' component='h2'>
                    {name}
               </Typography>
               <Typography variant='body1'>{body}</Typography>
               <Box mt={2}>
                    <Button onClick={deleteComment} size='small'>
                         <DeleteRounded />
                    </Button>
                    <Button size='small'>
                         <Link to={`/photos/comment/update/${id}`}>
                              <EditRounded />
                         </Link>
                    </Button>
               </Box>
          </Box>
     );
};

export default CommentCardComponent;
