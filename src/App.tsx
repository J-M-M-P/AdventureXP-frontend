import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Activity from "./pages/Activity";
import Utility from "./pages/Utility";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/activity" element={<Activity />} />
                    <Route path="/utility" element={<Utility />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
