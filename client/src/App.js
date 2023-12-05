import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";

function App() {

  const isUserSignedIn = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* {isUserSignedIn && <Route path="/ok" element={<AuthPage />} />} */}
        {isUserSignedIn ? (
          <Route path="/ok" element={<AuthPage />} />
        ) : (
          // Redirect to login page if user is not signed in
          <Route path="/ok" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
