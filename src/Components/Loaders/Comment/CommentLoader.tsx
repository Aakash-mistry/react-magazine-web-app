import { Box } from "@material-ui/core";
import React from "react";
import ContentLoader from "react-content-loader";

const CommentLoader: React.FC = (props) => {
     return (
          <Box>
               <ContentLoader
                    speed={0.5}
                    width={400}
                    height={460}
                    viewBox='0 0 400 460'
                    backgroundColor='grey'
                    foregroundColor='#ecebeb'
                    {...props}>
                    <circle cx='35' cy='35' r='19' />
                    <rect x='66' y='23' rx='2' ry='2' width='229' height='16' />
                    <rect x='5' y='60' rx='2' ry='2' width='385' height='28' />
               </ContentLoader>
          </Box>
     );
};

export default CommentLoader;
