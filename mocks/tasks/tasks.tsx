import { ITaskSpace } from "../../types/types";

export const tasksArray: Array<ITaskSpace> = [
    {
        name: 'Task Space 1',
        priority: false,
        id: '1',
        tasks: [
            {
                name: 'Do Logo',
                id: '1',
                assignee: 'n.shevchik',
                priority: false,
                done: false
            },
            {
                name: 'Do Do Do Do',
                id: '2',
                assignee: 'n.shevchik',
                priority: true,
                done: true
            }
        ]
    },
    {
        name: 'Task Space 2',
        priority: true,
        id: '2',
        tasks: [
            {
                name: 'Do Coffee',
                id: '3',
                assignee: 'n.shevchik',
                priority: false,
                done: false
            }
        ]
    },
]