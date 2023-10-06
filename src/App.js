import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reg from './Reg';
import TeamDetail from './TeamDetail';
import CompletedHackathon from './CompletedHackathon';
import IdeaDescription from './IdeaDescription';
import ProjectDetail from './ProjectDetail';
import PanelistProjectList from './PanelistProjectList';
import PanelReview from './PanelReview';


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/Auth" element={<Reg />}></Route>
      <Route path="/CompletedHackathon" element={<CompletedHackathon />}></Route>
      <Route path='/teamDetail' element={<TeamDetail />}></Route>
      <Route path="/ideaDescription" element={<IdeaDescription />}></Route>
      <Route path="/projectDetail/:id" element={<ProjectDetail />}></Route>
      <Route path="/panelistProjectList" element={<PanelistProjectList />}></Route>
      <Route path="/panelReview/:id" element={<PanelReview />}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
