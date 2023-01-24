import { StylesProvider } from "./StylesProvider";
import {
  VestaboardContextProvider,
  Theme as MaterialThemeProvider,
} from "@vestaboard/installables";

interface IProviders {
  children: React.ReactNode;
}

const VestaboardContextProviderAny = VestaboardContextProvider as any;

export const Providers = (props: IProviders) => (
  <VestaboardContextProviderAny>
    <StylesProvider>
      <MaterialThemeProvider>{props.children}</MaterialThemeProvider>
    </StylesProvider>
  </VestaboardContextProviderAny>
);
