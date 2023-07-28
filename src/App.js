import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import SkillStackPage from "./pages/SkillStackPage";
import AccountPage from "./pages/AccountPage";
import ErrorPage from "./pages/ErrorPage"
import ProjectModal from "./component/ProjectModal";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <HomePage /> } />
      <Route path="/project" element={ <ProjectPage /> } />
      <Route path="/skillStack" element={ <SkillStackPage /> } />
      <Route path="/account" element={ <AccountPage /> } />
      <Route path="/project/detail" element={ <ProjectModal /> } />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
