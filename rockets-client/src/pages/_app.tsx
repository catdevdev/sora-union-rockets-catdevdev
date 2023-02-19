import "../app/styles/globals.css";

import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Provider } from "react-redux";

import { wrapper } from "@/app/store/store";
import { Page } from "@/shared/types/page";

type Props = AppProps & {
  Component: Page;
};

const App = ({ Component, ...rest }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Layout>{getLayout(<Component {...props.pageProps} />)}</Layout>
    </Provider>
  );
};

export default App;
