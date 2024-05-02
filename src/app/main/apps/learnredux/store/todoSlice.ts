import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../../../../store/store.ts";

export interface TaskData {
    idTask: number;
    title: string;
    description: string;
}

export type TodoTasks = TaskData[];

const initialState: TodoTasks = [];

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskData>) => {
            return [...state, action.payload];
            // initialState.push(action.payload);
        }
    }
});

export const {addTask} = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;