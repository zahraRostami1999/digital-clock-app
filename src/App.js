import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Clock from './Clock';
import StopWatch from './StopWatch';
import "./index.css";

function App() {
  document.title = 'Clock';
  return (
    <div className="App">
      <BrowserRouter>

        {/* Tabs */}
        <div className="tabsContainer">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "tab activeTab" : "tab"}
          >
            Clock
          </NavLink>

          <NavLink
            to="/stopWatch"
            className={({ isActive }) => isActive ? "tab activeTab" : "tab"}
          >
            Stop Watch
          </NavLink>
        </div>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/stopWatch" element={<StopWatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
