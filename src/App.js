import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clock from './Clock';
import StopWatch from './StopWatch';

function App() {
  document.title = 'Clock';
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Clock />} />
            <Route path="/stopWatch" element={<StopWatch />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
