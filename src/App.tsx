import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Property from "./pages/Property";
import PropertyDetail from "./features/property/PropertyDetail";
import Agent from "./pages/Agent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/agent" element={<Agent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
