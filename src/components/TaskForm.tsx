import { useState } from "react";
import type { Priority, Task } from "../types/task";

type NewTask = Omit<Task, "id" | "completed">;

interface TaskFormProps {
    onAddTask: (task: NewTask) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [priority, setPriority] = useState<Priority>("medium");

    return (
        <div>
           <form
                onSubmit={(e) => {
                    e.preventDefault();

                    onAddTask({
                        title,
                        description,
                        priority
                    });

                    setTitle("");
                    setDescription("");
                    setPriority("medium");
                }}
                className="space-y-4"
            >
                {/* Task Title */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Task Title
                    </label>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter task title"
                        required
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Description (Optional)
                    </label>

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter task description"
                        rows={3}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Priority */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Priority
                    </label>

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value as Priority)}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                {/* Add Task Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default TaskForm;