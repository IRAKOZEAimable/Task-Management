import type { Task } from "../types/task";

interface TaskListProps {
    tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
    return (
        <div>
            {tasks.map((task) => (
            <div key={task.id}>
                <h3>{task.title}</h3>
                {task.description && <p>{task.description}</p>}
            </div>
        ))}
        </div>
    );
};

export default TaskList;