import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) => {
  return createStyles({
    link: {
      textDecoration: 'none'
    },
    AnimationFadeOutUp: {
      from: {
        opacity: 1
      },
      to: {
        opacity: 0,
        transform: `translate3d(0, '-2000px', 0)`
      }
    }
  });
});
