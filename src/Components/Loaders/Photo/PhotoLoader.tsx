import React from "react";
import { Box } from "@material-ui/core";
import ContentLoader from "react-content-loader";

const PhotoLoader: React.FC = (props) => {
     return (
          <Box>
               <ContentLoader
                    speed={1}
                    width='100%'
                    height={460}
                    viewBox='0 0 400 460'
                    backgroundColor='grey'
                    foregroundColor='#ecebeb'
                    {...props}>
                    <rect x='-1' y='5' rx='2' ry='2' width='400' height='320' />
                    <rect
                         x='1'
                         y='336'
                         rx='0'
                         ry='0'
                         width='100%'
                         height='41'
                    />
                    <circle cx='37' cy='413' r='25' />
                    <circle cx='108' cy='415' r='25' />
               </ContentLoader>
          </Box>
     );
};

export default PhotoLoader;
