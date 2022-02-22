import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import theme from "./styles/colors";
import { ThemeProvider } from "@mui/material";
import Header from './components/Header';
import Footer from './components/Footer';
import NewTransaction from './pages/newTransaction/NewTransaction';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <div className="bodyContainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newTransaction" element={<NewTransaction />} />
            </Routes>
          </div>
          <Footer />
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
