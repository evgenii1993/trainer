import React from "react";
import { ThemeProvider } from '@material-ui/styles';

import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";

import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {green} from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";
import {Icon} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const TasksAddForm = (props) => {
    const [isEdit, setIsEdit] = React.useState(false);


    const handleIsEdit = (bool = false) => {
        setIsEdit(bool)
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                {!isEdit &&
                    <>
                        <Button variant="contained" color="green" onClick={() => {handleIsEdit(true)}}>
                            Добавить
                        </Button>
                    </>
                }
                {isEdit &&
                    <>
                        <Button variant="contained" color="green" onClick={() => {handleIsEdit(false)}}>
                            Закрыть
                        </Button>
                    </>
                }
            </ThemeProvider>
        </div>
    )
};

export default TasksAddForm;