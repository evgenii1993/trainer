import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import useForm from 'react-hook-form';

import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";

import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {green} from "@material-ui/core/colors";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from "@material-ui/core/Fab";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {Icon} from "@material-ui/core";

import { Field, reduxForm, reset } from "redux-form";


const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const TasksAddForm = (props) => {
    const [isEdit, setIsEdit] = React.useState(false);
    const { register, handleSubmit } = useForm();

    const [values, setValues] = React.useState({
        ext1: 'www',
        ext2: 'sss',
        ext3: 'eee'
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };


    const onSubmit = data => {
        console.log(data);
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
                                        label="Dense"
                                        name="ext1"
                                        value={values["ext1"]}
                                        margin="dense"
                                        variant="outlined"
                                        onChange={handleChange('ext1')}
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        label="Wwww"
                                        name="ext2"
                                        value={values["ext2"]}
                                        margin="dense"
                                        variant="outlined"
                                        onChange={handleChange('ext2')}
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        label="Wwww"
                                        name="ext3"
                                        value={values["ext3"]}
                                        margin="dense"
                                        variant="outlined"
                                        onChange={handleChange('ext3')}
                                        inputRef={register}
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