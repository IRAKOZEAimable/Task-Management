import { useState } from "react";
import type { Priority, Task } from "../types/task";

interface EditTaskFormProps {
    task: Task;
    onSave: (updatedTask: Task) => void;
    onCancel: () => void;
}

const EditTaskForm = ({
    task,
    onSave,
    onCancel
}: EditTaskFormProps) => {

    const [title, setTitle] = useState<string>(task.title);
    const [description, setDescription] = useState<string>(
        task.description ?? ""
    );
    const [priority, setPriority] = useState<Priority>(task.priority);

    return (

        <form
            onSubmit={(e) => {
                e.preventDefault();

                onSave({
                    ...task,
                    title,
                    description,
                    priority
                });
            }}
            className="space-y-4 border border-slate-200 rounded-xl p-5 mt-4 bg-slate-50"
        >
            <h3 className="text-lg font-bold text-slate-900">
                Edit Task
            </h3>

            {/* Task Title */}
            <div>
                <label className="block text-sm font-medium mb-1">
                    Task Title
                </label>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-medium mb-1">
                    Description
                </label>

                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">

                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold px-4 py-2 rounded-lg"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg"
                >
                    Save Changes
                </button>

            </div>
        </form>

    );
};

export default EditTaskForm;