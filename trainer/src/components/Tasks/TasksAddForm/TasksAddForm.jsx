import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import useForm from 'react-hook-form';


import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {green} from "@material-ui/core/colors";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';



const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const TasksAddForm = (props) => {
    const [isEdit, setIsEdit] = React.useState(false);
    const { register, handleSubmit } = useForm();

    const [values, setValues] = React.useState({
        title: 'www',
        rang: 'sss',
        experience: '10'
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const onSubmit = data => {
        props.addTask(data);
    };

    const handleIsEdit = (bool = false) => {
        setIsEdit(bool)
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                {!isEdit &&
                    <>
                        <Button variant="contained"  onClick={() => {handleIsEdit(true)}}>
                            Добавить
                        </Button>
                    </>
                }
                {isEdit &&
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={3}>
                                <Grid item xs={3}>
                                    <TextField
                                        label="title"
                                        name="title"
                                        value={values["title"]}
                                        margin="dense"
                                        variant="outlined"
                                        onChange={handleChange('title')}
                                        inputRef={register({
                                            required: true
                                        })}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        label="rang"
                                        name="rang"
                                        value={values["rang"]}
                                        margin="dense"
                                        variant="outlined"
                                        onChange={handleChange('rang')}
                                        inputRef={register({
                                            required: true
                                        })}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        label="experience"
                                        name="experience"
                                        value={values["experience"]}
                                        margin="dense"
                                        variant="outlined"
                                        onChange={handleChange('experience')}
                                        inputRef={register({required: true, pattern: /\d+/})}
                                    />
                                </Grid>
                                <Grid item xs={3}>    
                                    <IconButton type="submit" onClick={() => {console.log('sss')}}><ThumbUpIcon /></IconButton>
                                    <Button variant="contained" color="primary" onClick={() => {handleIsEdit(false)}}>
                                        Закрыть
                                    </Button>
                                </Grid>
                        </Grid>
                        </form>
                    </>
                }
            </ThemeProvider>
        </div>
    )
};



export default TasksAddForm;