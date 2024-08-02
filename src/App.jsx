import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navber";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/Error";
import Page from "./components/Page";


function App() {
  return (
    <div>
      <BrowserRouter basename="/klema-portfolio">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/project" element={<Project />} />
          <Route path={"/blog/page/:Id"} element={<Page />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
