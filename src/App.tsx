
import { useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

type View = "login" | "register" | "dashboard";

function App() {
    const [currentView, setCurrentView] = useState<View>("login");

    return (
        <>
            {currentView === "login" && (
                <div className="min-h-screen bg-white flex items-center justify-center px-4">
                    <Login
                        onRegister={() => setCurrentView("register")}
                        onLogin={() => setCurrentView("dashboard")}
                    />
                </div>
            )}

            {currentView === "register" && (
                <div className="min-h-screen bg-white flex items-center justify-center px-4">
                    <Register
                        onLogin={() => setCurrentView("login")}
                    />
                </div>
            )}

            {currentView === "dashboard" && (
                <Dashboard
                    onLogout={() => setCurrentView("login")}
                />
            )}
        </>
    );
}

export default App;
