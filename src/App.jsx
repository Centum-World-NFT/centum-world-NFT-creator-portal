import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/Homepage";
import CreaterDashboard from "./pages/createrdashboard/CreaterDashboard";
import OverviewSection from "./pages/OverviewSection/OverviewSection";
import VideoSection from "./pages/VideoSection/VideoSection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creatorDashboard" element={<CreaterDashboard />}>
          <Route path="overview" element={<OverviewSection />} />
          <Route path="yourVideos" element={<VideoSection />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
