import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Property from "./pages/Property";
import PropertyDetail from "./features/property/PropertyDetail";
import Agent from "./pages/Agent";
import AgentProfile from "./features/agent/AgentProfile";
import Login from "./features/authentication/Login";
import SellWithUs from "./pages/SellWithUs";
import Register from "./features/authentication/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/sell" element={<SellWithUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/agent/:id" element={<AgentProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
