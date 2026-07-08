import { Routes, Route } from 'react-router-dom';
import SabrIntro from './pages/SabrIntro';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Step5 from './pages/Step5';
import Step6 from './pages/Step6';
import SabrComplete from './pages/SabrComplete';
import History from './pages/History';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SabrIntro />} />
      <Route path="/intro" element={<SabrIntro />} />
      <Route path="/step/1" element={<Step1 />} />
      <Route path="/step/2" element={<Step2 />} />
      <Route path="/step/3" element={<Step3 />} />
      <Route path="/step/4" element={<Step4 />} />
      <Route path="/step/5" element={<Step5 />} />
      <Route path="/step/6" element={<Step6 />} />
      <Route path="/complete" element={<SabrComplete />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
