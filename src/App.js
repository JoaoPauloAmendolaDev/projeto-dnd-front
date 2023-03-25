import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import SingIn from "./pages/SignIn";
import SingUp from "./pages/SignUp";

function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<SingIn />} />
            <Route path="/signup" element={<SingUp />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
