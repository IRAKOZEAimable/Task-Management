
export type Priority = "low" | "hedium" | "high"

export interface Task {
    id: number;
    title: string;
    description?: string;
    priority: Priority;
    completed: boolean;
}