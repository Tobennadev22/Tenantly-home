import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./UI/Navbar";
// import Partners from "./UI/Partners";
import Footer from "./UI/Footer";

function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        {/* <Partners /> */}
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
