import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div lassName="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
