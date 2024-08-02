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
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/klema-portfolio/" element={<Home />} />
          <Route path="/klema-portfolio/blog" element={<Blogs />} />
          <Route path="/klema-portfolio/project" element={<Project />} />
          <Route path={"/klema-portfolio/blog/page/:Id"} element={<Page />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
