import { useState } from "react";
import type { Priority, Task } from "../types/task";

type NewTask = Omit<Task, "id" | "completed">;

interface TaskFormProps {
    onAddTask: (task: NewTask) => void;
}