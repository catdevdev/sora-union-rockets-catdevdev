import "../app/styles/globals.css";

import { ConfigProvider, theme } from "antd";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Provider } from "react-redux";

import { wrapper } from "@/app/store/store";
import { Page } from "@/shared/types/page";

type Props = AppProps & {
  Component: Page;
};
const queryClient = new QueryClient();

const App = ({ Component, ...rest }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider>
          <Layout>{getLayout(<Component {...props.pageProps} />)}</Layout>
        </ConfigProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
