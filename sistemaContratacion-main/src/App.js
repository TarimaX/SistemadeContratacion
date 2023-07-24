import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from './reducers/auth.slice'
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Formulario from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Auth from './scenes/auth';

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { useEffect } from "react";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // para desloguearse usar la funcion: dispatch(logout())

  return (
    auth.isLogged ? (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Auth/>}/>
              <Route path="/seleccionar-postulacion" element={<Formulario />} />
              <Route path="/subir-informacion" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>) : (<Auth />)
  );
}

export default App;
