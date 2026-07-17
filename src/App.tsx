import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyMobileCta } from "./components/StickyMobileCta";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ScrollToTop } from "./lib/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Doctors } from "./pages/Doctors";
import { Departments } from "./pages/Departments";
import { DepartmentDetail } from "./pages/DepartmentDetail";
import { LaserSurgeries } from "./pages/LaserSurgeries";
import { HealthCheckUps } from "./pages/HealthCheckUps";
import { Insurance } from "./pages/Insurance";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
          <Route path="/laser-surgeries" element={<LaserSurgeries />} />
          <Route path="/health-checkups" element={<HealthCheckUps />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <StickyMobileCta />
      <WhatsAppButton />
    </div>
  );
}

export default App;
