import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/Homepage";
import CreaterDashboard from "./pages/createrdashboard/CreaterDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creatorDashboard" element={<CreaterDashboard />} />
      </Routes>
    </>
  );
}

export default App;
