import React, { useState, useEffect, ChangeEvent } from "react";
import {
     Box,
     Button,
     DialogActions,
     FormControl,
     FormLabel,
     DialogContent,
     DialogTitle,
     Dialog,
     Radio,
     RadioGroup,
     FormControlLabel,
     DialogContentText,
} from "@material-ui/core";
import { BookmarkBorderRounded } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectAlbums } from "store/album/albums.selector";
import { AlbumService } from "services";
// import { useParams } from "react-router-dom";
// import { selectSinglePhoto } from "store/photo/photo.selector";

// interface Params {
//      id: string;
// }

const ConfirmationDialogRaw: React.FC = () => {
     const [open, setOpen] = useState(false);
     const [value, setValue] = useState("none");
     // const params = useParams<Params>();

     const openDialogBox = () => {
          setOpen(true);
     };

     const closeDialogBox = () => {
          setOpen(false);
     };

     const album = useSelector(selectAlbums);

     useEffect(() => {
          (async () => {
               await AlbumService.getAlbums();
               // console.log(albums);
          })();
     }, []);

     const handleSelectAlbum = (e: ChangeEvent<HTMLInputElement>) => {
          setValue((e.target as HTMLInputElement).value);
     };

     return (
          <Box>
               <Button onClick={openDialogBox}>
                    <BookmarkBorderRounded />
               </Button>
               <Dialog open={open} onClose={closeDialogBox}>
                    <DialogTitle id='form-dialog-title'>
                         Save to the following album
                    </DialogTitle>
                    <form>
                         <DialogContent>
                              <DialogContentText>
                                   Selection will be save this photo to the
                                   created album, and album action will be
                                   affect on this photo.
                              </DialogContentText>
                              <FormControl component='fieldset'>
                                   <FormLabel component='legend'>
                                        Albums
                                   </FormLabel>
                                   <RadioGroup
                                        aria-label='gender'
                                        name='album'
                                        value={value}
                                        onChange={handleSelectAlbum}>
                                        <FormControlLabel
                                             value='none'
                                             control={<Radio />}
                                             label='none'
                                        />
                                        {album.map((element) => (
                                             <Box key={element._id}>
                                                  <FormControlLabel
                                                       value={element._id}
                                                       control={<Radio />}
                                                       label={element.title}
                                                  />
                                             </Box>
                                        ))}
                                   </RadioGroup>
                              </FormControl>
                         </DialogContent>
                         <DialogActions>
                              <Button onClick={closeDialogBox}>Cancel</Button>
                              <Button type='submit'>Save</Button>
                         </DialogActions>
                    </form>
               </Dialog>
          </Box>
     );
};

export default ConfirmationDialogRaw;
