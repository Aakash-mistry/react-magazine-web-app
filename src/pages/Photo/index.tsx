import React from "react";
import { Route, Switch } from "react-router-dom";
import ShowPhotos from "../Photo/ShowPhotos";
import SinglePhoto from "../Photo/SinglePhoto";
import EditCommentPage from "./EditComment";
import EditPhotoPage from "./EditPhoto";
import { Box } from "@material-ui/core";
import UplaodPhoto from "./UploadPhoto";

const Routing: React.FC = () => {
     return (
          <Box>
               <Switch>
                    <Route exact path='/photos' component={ShowPhotos} />
                    <Route exact path='/photos/:id' component={SinglePhoto} />
                    <Route
                         exact
                         path='/photos/comment/update/:id'
                         component={EditCommentPage}
                    />
                    <Route
                         exact
                         path='/photos/new/upload-photo'
                         component={UplaodPhoto}
                    />
                    <Route
                         exact
                         path='/photos/edit/:id'
                         component={EditPhotoPage}
                    />
               </Switch>
          </Box>
     );
};

export default Routing;
