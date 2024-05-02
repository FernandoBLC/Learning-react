import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {TaskData} from './store/todoSlice.ts'
import {TextField, Button} from '@mui/material';

const schema: yup.ObjectSchema<TaskData> = yup.object().shape({
    idTask: yup.number().default(0),
    title: yup.string().required('Campo Vacio').min(10, 'Minimo 10 caracteres').max(100, 'Solo se permiten 100 caracteres como maximo').default(""),
    description: yup.string().required('Campo Vacio').min(10, 'Minimo 10 caracteres').max(100, 'Solo se permiten 100 caracteres como maximo').default(""),
});

const initialValues: TaskData = {
    idTask: 0,
    title: '',
    description: '',
}

function TodosAppForm() {
    const {handleSubmit, formState, control} = useForm({
        mode: 'onChange',
        initialValues,
        resolver: yupResolver(schema),
    });
    const {errors, isValid, dirtyFields} = formState;

    function onSubmit(task: TaskData) {
        console.log('HOLA estos son los datos recibidos: ', task);
        console.log('HOLA estos son los datos recibidos isValid: ', isValid);
        console.log('HOLA estos son los datos recibidos dirtyFields: ', dirtyFields);
    }

    return (

        <div className="flex justify-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col">
                    <div className="mt-8">
                        <Controller
                            control={control}
                            name="idTask"
                            key={0}
                            render={({field}) => (
                                <TextField
                                    {...field}

                                    variant="filled"
                                    label="Task ID"
                                    error={!!errors.idTask}
                                    helperText={errors.idTask?.message}
                                />
                            )}
                        />
                    </div>
                    <div className="mt-8">
                        <Controller
                            control={control}
                            name="title"
                            key={1}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    variant="filled"
                                    label="Titulo"
                                    error={!!errors.title}
                                    helperText={errors.title?.message}
                                />
                            )}
                        />
                    </div>
                    <div className="mt-8">
                        <Controller
                            control={control}
                            name="description"
                            key={2}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    variant="filled"
                                    label="Descripcion"
                                    error={!!errors.description}
                                    helperText={errors.description?.message}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-8">
                    <Button
                        variant="text"
                        type="submit"
                    >
                        Crear Task
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default TodosAppForm;