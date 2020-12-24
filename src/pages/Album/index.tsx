import * as React from "react";
import { Route, Switch } from "react-router-dom";

import AlbumListPage from "./album-list";
import AlbumPhotoPage from "./album-photo";
import EditAlbums from "./edit-album";
import newAlbumPage from "./NewAlbum";

const Routing: React.FC = () => {
     return (
          <Switch>
               <Route exact path='/albums' component={AlbumListPage} />
               <Route exact path='/albums/:id' component={AlbumPhotoPage} />
               <Route
                    exact
                    path='/albums/create/new-album'
                    component={newAlbumPage}
               />
               <Route
                    exact
                    path='/albums/edit-albums/:id'
                    component={EditAlbums}
               />
          </Switch>
     );
};

export default Routing;
