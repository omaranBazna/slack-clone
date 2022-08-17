import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {false ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app-body">
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
