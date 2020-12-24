import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyle from "./Navbar.styles";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PhotoSizeSelectActualRoundedIcon from "@material-ui/icons/PhotoSizeSelectActualRounded";
import AlbumRoundedIcon from "@material-ui/icons/AlbumRounded";

const Navbar: React.FC = (props) => {
     const classes = useStyle();
     return (
          <AppBar className={classes.navbarBackground} position='fixed'>
               <Toolbar>
                    <Typography variant='h6'>Website Logo</Typography>
                    <div className={classes.navButtons}>
                         <Button color='inherit'>
                              <Link to='/' className={classes.navLinks}>
                                   <HomeRoundedIcon />
                              </Link>
                         </Button>
                         <Button color='inherit'>
                              <Link to='/photos' className={classes.navLinks}>
                                   <PhotoSizeSelectActualRoundedIcon />
                              </Link>
                         </Button>
                         <Button color='inherit'>
                              <Link to='/albums' className={classes.navLinks}>
                                   <AlbumRoundedIcon />
                              </Link>
                         </Button>
                    </div>
               </Toolbar>
          </AppBar>
     );
};

export default Navbar;
