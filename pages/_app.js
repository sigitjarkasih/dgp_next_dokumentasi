import "../styles/globals.css";
import { AppProvider } from "../config/context/app";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const contextData = {};
  return (
    <AppProvider value={contextData}>
      <NextNProgress height={70} />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
