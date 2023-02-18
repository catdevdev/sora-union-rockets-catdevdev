import "./globals.css";
import { Provider } from "react-redux";
import { wrapper } from "@/appTemp/store/store";

const RootLayout = ({ children, ...rest }: { children: React.ReactNode }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <html lang="en">
      <head />
      <body>
        <Provider store={store}>{...props.pageProps}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
