import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import theme from "./styles/colors";
import { ThemeProvider } from "@mui/material";
import NewTransaction from './pages/newTransaction/NewTransaction';
import PrivateRoute from "./route/privateRoute";
import PublicRoute from "./route/publicRoute";
import Login from './pages/login/Login';
import LandingPage from './pages/landing/landing';

function App() {
  const [isAuthenticated, setAuthentication] = useState(false);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <LandingPage/>
              </PublicRoute>
            } />
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/newTransaction" element={<NewTransaction />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
