import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./components/pages/DashboardPage";

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/live" element={<DashboardPage/>}/>
          
        </Routes>
      </BrowserRouter>
    )
}

export default App;
