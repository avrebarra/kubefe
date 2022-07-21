import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazily } from "react-lazily";

import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "./components/BlockFooter";

import config from "./config";

const { Home } = lazily(() => import("./components/ScreenHome"));

const ChakraThemeExtended = extendTheme({
  config: {
    initialColorMode: "light",
  },
  components: {
    Button: {
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
    },
  },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
});

export function App() {
  // context, vars, and states
  const [readiness, setReadiness] = React.useState<boolean>(false);

  // helper funcs
  const funcLoadData = async () => {};
  const funcRenderLoader = () => <p>Loading...</p>;

  // effects
  React.useEffect(() => {
    funcLoadData();
  }, [readiness]);

  return (
    <ChakraProvider theme={ChakraThemeExtended}>
      <div className="appwrapper flex justify-center items-center h-screen w-screen ">
        <div className="app w-full max-w-3xl h-full xs:max-h-144">
          <div className="content p-8 py-10 min-h-full content-between">
            <BrowserRouter basename={config.appBasePath}>
              <React.Suspense fallback={funcRenderLoader()}>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </React.Suspense>
            </BrowserRouter>
            <br />
            <Footer />
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
