import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/Homepage";
import CreaterDashboard from "./pages/createrdashboard/CreaterDashboard";
import OverviewSection from "./pages/OverviewSection/OverviewSection";
import VideoSection from "./pages/VideoSection/VideoSection";
import CreatorAccount from "./pages/Account/CreatorAccount";
import UploadVideo from "./pages/uploadVideo/UploadVideo";
import Subscriber from "./pages/Subscribe/Subscriber"
import CreatePlaylist from "./pages/CreatorCreatePlaylist/CreatePlaylist";
import ViewPlaylistVideo from "./pages/viewplaylist/ViewPlaylistVideo";
import EditPlaylist from "./pages/edit/EditPlaylist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creatorDashboard" element={<CreaterDashboard />}>
          <Route path="overview" element={<OverviewSection />}/>
          <Route path="yourVideos" element={<VideoSection />}/>
          <Route path="yourVideos/:id" element={<ViewPlaylistVideo/>}/>
          <Route path="editPlaylist/:id" element={<EditPlaylist/>}/>
          <Route path="subscribers" element={<Subscriber />} />
          <Route path="uploadVideo" element={<UploadVideo />} />
          <Route path="account" element={<CreatorAccount />} />
          <Route path="createplaylist" element={<CreatePlaylist />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
