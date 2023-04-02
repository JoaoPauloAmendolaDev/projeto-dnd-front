import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import useToken from "./hooks/api/useToken";
import LoggedInitiative from "./pages/loggedPages/Initiative";
import SingIn from "./pages/SignIn";
import SingUp from "./pages/SignUp";
import UnloggedInitiative from "./pages/unloggedPages/Initiative";

function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<SingIn />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/loggedInitiative" element={<LoggedInitiative />} />
            <Route path="/unloggedInitiative" element={<UnloggedInitiative />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>
    {children}
  </>;
}

export default App;
