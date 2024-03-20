import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Activity from "./pages/Activity";
import Utility from "./pages/Utility";
import Reservation from "./pages/Reservation";
import Login from "./security/Login";
import Logout from "./security/Logout";
import RequireAuth from "./security/RequireAuth";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/activity" element={<Activity />} />
                    <Route path="/activity/:id" element={<Activity />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route
                        path="/utility"
                        element={
                            <RequireAuth roles={["ADMIN", "USER"]}>
                                <Utility />
                            </RequireAuth>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
