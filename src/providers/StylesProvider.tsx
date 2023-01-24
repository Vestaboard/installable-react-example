import {
  StylesProvider as MuiStylesProvider,
  createGenerateClassName,
} from "@material-ui/core";

const generateClassName = createGenerateClassName({
  disableGlobal: true,
});

interface IStylesProvider {
  children: React.ReactNode;
}

export const StylesProvider = (props: IStylesProvider) => (
  <MuiStylesProvider generateClassName={generateClassName}>
    {props.children}
  </MuiStylesProvider>
);
