
import { useState } from "react";
import type { Task } from "../types/task";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface DashboardProps {
    onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {

    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = (
            newTask: Omit<Task, "id" | "completed">
        ) => {
            const task: Task = {
                id: Date.now(),
                ...newTask,
                completed: false
            };

            setTasks((prevTasks) => [...prevTasks, task]);
        };

    return (
        <div className="min-h-screen bg-[#68c568] px-4 py-8">

            {/* Dashboard Title */}
            <h1 className="text-4xl sm:text-6xl font-bold text-white text-center mb-8">
                Todo Priorities
            </h1>

            {/* Main Dashboard Container */}
            <div className="w-full max-w-5xl min-h-[560px] mx-auto bg-white rounded-3xl p-6 sm:p-10">  

                {/* Dashboard Content */}
                <div className="max-w-xl mx-auto">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">

                        <h2 className="text-xl font-bold text-slate-900">
                            Your Tasks
                        </h2>

                        <button
                            type="button"
                            onClick={onLogout}
                            className="bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
                        >
                            Log out
                        </button>

                    </div>

                     {/* Create Task Form */}
                    <TaskForm onAddTask={handleAddTask} />

                     {/* Display Tasks */}
                    <TaskList tasks={tasks} />


                </div>

            </div>

        </div>
    );
};

export default Dashboard;
