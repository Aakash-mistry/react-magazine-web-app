import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PhotoService } from "services";
import useStyle from "./styles";
import { selectSinglePhoto } from "store/photo/photo.selector";
import { ConfirmationDialogRaw } from "Components";

interface Params {
     id: string;
}

const PreviewImageComponent: React.FC = () => {
     const classes = useStyle();
     const params = useParams<Params>();
     const data = useSelector(selectSinglePhoto);
     useEffect(() => {
          (async () => {
               await PhotoService.getPhotoById(params.id);
               // console.log(photo);
          })();
     }, [params.id]);

     return (
          <Box className={classes.card}>
               <img
                    src={data.thumbnailUrl}
                    className={classes.card}
                    alt={data.title}
               />
               <ConfirmationDialogRaw />
          </Box>
     );
};

export default PreviewImageComponent;
