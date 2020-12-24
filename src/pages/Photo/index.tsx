import React from "react";
import { Route, Switch } from "react-router-dom";
import ShowPhotos from "../Photo/ShowPhotos";
import SinglePhoto from "../Photo/SinglePhoto";

const Routing: React.FC = () => {
     return (
          <div>
               <Switch>
                    <Route exact path='/photos' component={ShowPhotos} />
                    <Route exact path='/photos/:id' component={SinglePhoto} />
               </Switch>
          </div>
     );
};

export default Routing;
