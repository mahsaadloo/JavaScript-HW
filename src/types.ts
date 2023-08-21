export type dailyTask = {
    id: string,
    title: string,
    description: string
};

export type tasksListType = Array<dailyTask>; // or dailyTask[]