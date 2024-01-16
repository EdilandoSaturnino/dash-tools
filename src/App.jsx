import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import Projetos from "./pages/Projetos";
import Metas from "./pages/Metas";
import DefaultLayout from "./layouts/DefaultLayout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { PageTitleProvider } from "./components/PageTitleProvider";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <PageTitleProvider>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="clientes" element={<Clientes />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/metas" element={<Metas />} />
            </Route>
          </Routes>
        </PageTitleProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
