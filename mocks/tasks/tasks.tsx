import { ITaskSpace } from "../../types/types";
import { nanoid as id } from 'nanoid'

export const tasksArray: Array<ITaskSpace> = [
    {
        name: 'Task Space 1',
        priority: false,
        id: '1',
        tasks: [
            {
                name: 'Do Logo',
                id: id(),
                assignee: 'n.shevchik',
                priority: false,
                done: false
            },
            {
                name: 'Do Do Do Do',
                id: id(),
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
                id: id(),
                assignee: 'n.shevchik',
                priority: false,
                done: true
            }
        ]
    },
]