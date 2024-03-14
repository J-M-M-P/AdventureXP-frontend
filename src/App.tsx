import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Activity from "./pages/Activity";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/activity" element={<Activity />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
