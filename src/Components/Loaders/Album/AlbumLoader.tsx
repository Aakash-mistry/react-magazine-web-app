import React from "react";
import ContentLoader from "react-content-loader";
import { Box } from "@material-ui/core";

const AlbumLoader: React.FC = (props) => {
     return (
          <Box>
               <ContentLoader
                    speed={0.4}
                    width='100%'
                    height={460}
                    viewBox='0 0 400 460'
                    backgroundColor='#9e9e9e'
                    foregroundColor='#ecebeb'
                    {...props}>
                    <rect x='7' y='32' rx='0' ry='0' width='384' height='125' />
               </ContentLoader>
          </Box>
     );
};

export default AlbumLoader;
