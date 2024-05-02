import {useState} from 'react';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Checkbox,
    IconButton
} from '@mui/material';

import CommentIcon from '@mui/icons-material/Comment';

import TodosAppForm from './TodosAppForm.tsx';

import {TodoTasks, TaskData} from './store/todoSlice.ts';


function TodosApp() {
    const auxTodo: TodoTasks = [
        {idTask: 1, title: 'Tarea 1', description: 'Esta es la tarea 1'},
        {idTask: 2, title: 'Tarea 2', description: 'Esta es la tarea 2'},
        {idTask: 3, title: 'Tarea 3', description: 'Esta es la tarea 3'},
        {idTask: 4, title: 'Tarea 4', description: 'Esta es la tarea 4'}
    ];

    const [checked, setChecked] = useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <div className="flex flex-col justify-center w-full">
            <TodosAppForm/>

            <List sx={{width: '50%'}}>
                {
                    auxTodo.map((element: TaskData) => {
                        return <ListItem
                            key={element.idTask}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                    <CommentIcon/>
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(element.idTask)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(element.idTask) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText>
                                    Title: {element.title}
                                </ListItemText>
                                <ListItemText>
                                    Description: {element.description}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    })
                }
            </List>

        </div>
    )
}

export default TodosApp;