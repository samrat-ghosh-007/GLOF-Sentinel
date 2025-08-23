import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./Components/Frontpage/Front";
import Contact from "./Components/Contact/Contact";
import Support from "./Components/Support/Support";
import Login from "./Components/Support/Login";
import SignUp from "./Components/Support/SignUp";
import AllLakes from "./Components/Support/AllLakes";
import HistoricalReports from "./Components/Support/HistoricalReports";
import Overview from "./Components/Support/Overview";
import RecentAlert from "./Components/Support/RecentAlert";
import ProtectedRoute from "./Components/ProtectedRoute";
import ForgotAndResetPassword from "./Components/Support/ForgotAndResetPassword";
import VerifyCode from "./Components/Support/VerifyCode";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotAndResetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Verify route, receiving userId via state */}
        <Route path="/verify" element={<VerifyCode />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AllLakes />
            </ProtectedRoute>
          }
        />

        <Route path="/historical-reports" element={<HistoricalReports />} />
        <Route path="/recent-alerts" element={<RecentAlert />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </Router>
  );
}

export default App;
