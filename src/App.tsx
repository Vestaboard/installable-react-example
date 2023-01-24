import { Providers } from "./providers";
import { makeStyles } from "@material-ui/styles";
import { Settings } from "./routes/Settings";

const useStyles = makeStyles({
  root: {
    padding: 20,
    paddingBottom: 50,
  },
});

export const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Providers>
        <Settings />
      </Providers>
    </div>
  );
};
