import React from "react";
import Navbar from "./Appbar";

const Layout: React.FC = ({ children }) => {
     return (
          <React.Fragment>
               <Navbar />
               {children}
          </React.Fragment>
     );
};

export default Layout;
