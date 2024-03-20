import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Activity from "./pages/Activity";
import Utility from "./pages/Utility";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/activity" element={<Activity />} />
                    <Route path="/activity/:id" element={<Activity />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/utility" element={<Utility />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
