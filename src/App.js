import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import { routes } from "./Routes";

const App = () => {
  const [theme, setTheme] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: "rgba(255,255,255,0.6)",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout component={<Home />} setTheme={setTheme} />}
          />
          {routes.map((routes) => {
            return (
              <Route
                key={routes.id}
                path={routes.path}
                element={
                  <Layout component={routes.component} setTheme={setTheme} />
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
