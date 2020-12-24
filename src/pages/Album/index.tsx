import * as React from "react";
import { Route, Switch } from "react-router-dom";

import AlbumListPage from "./album-list";
import AlbumPhotoPage from "./album-photo";

const Routing: React.FC = () => {
     return (
          <Switch>
               <Route exact path='/albums' component={AlbumListPage} />
               <Route exact path='/albums/photo' component={AlbumPhotoPage} />
          </Switch>
     );
};

export default Routing;
