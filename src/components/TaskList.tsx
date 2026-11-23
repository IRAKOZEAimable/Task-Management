
import type { Task } from "../types/task";

interface TaskListProps {
    tasks: Task[];
    onToggleTask: (id: number) => void;
    onDeleteTask: (id: number) => void;
    onEditTask: (task: Task) => void;
}

const TaskList = ({
    tasks,
    onToggleTask,
    onDeleteTask,
    onEditTask
}: TaskListProps) => {

    if (tasks.length === 0) {
        return (
            <p className="text-center text-slate-500 py-8">
                No tasks yet. Add your first task!
            </p>
        );
    }

    return (
        <div className="space-y-4 mt-6">

            {tasks.map((task) => (
                <div
                    key={task.id}
                    className="border border-slate-200 rounded-xl p-4 shadow-sm"
                >

                    {/* Task Header */}
                    <div className="flex items-start justify-between gap-3">

                        <div className="flex items-start gap-3">

                            {/* Completion Checkbox */}
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => onToggleTask(task.id)}
                                className="mt-1 w-4 h-4 accent-green-600 cursor-pointer"
                            />

                            {/* Task Information */}
                            <div>
                                <h3 className={`font-semibold text-slate-900 ${
                                    task.completed
                                        ? "line-through text-slate-400"
                                        : ""
                                }`}>
                                    {task.title}
                                </h3>

                                {task.description && (
                                    <p className="text-sm text-slate-500 mt-1">
                                        {task.description}
                                    </p>
                                )}
                            </div>

                        </div>

                        {/* Priority Badge */}
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            task.priority === "high"
                                ? "bg-red-100 text-red-700"
                                : task.priority === "medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                        }`}>
                            {task.priority.toUpperCase()}
                        </span>

                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3 mt-4">

                        <button
                            type="button"
                            onClick={() => onEditTask(task)}
                            className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                        >
                            Edit
                        </button>

                        <button
                            type="button"
                            onClick={() => onDeleteTask(task.id)}
                            className="text-red-600 hover:text-red-800 text-sm font-semibold"
                        >
                            Delete
                        </button>

                    </div>

                </div>
            ))}

        </div>
    );
};

export default TaskList;
