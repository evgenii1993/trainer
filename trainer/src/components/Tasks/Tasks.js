import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';


import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';

const Tasks = (props) => {
    const [isEdit, setIsEdit] = React.useState([]);
    const [fields, setFields] = React.useState([{ title: null, rang: null, experience: null }]);

    const handleChange = (i, event) => {
        const values = [...fields];
            values[i].value = event.target.value;
            setFields(values);
    };

    const handleAdd = () => {
        const values = [...fields];
            values.push({ value: null });
            setFields(values);
    };

    const handleRemove = (i) => {
        const values = [...fields];
            values.splice(i, 1);
            setFields(values);
    };

    const handleClickEdit = (id) => {
        const rowIsEditIndex = isEdit.indexOf(id);
        let newIsEdit = [];
        
        if (rowIsEditIndex === -1) {
            newIsEdit = [...isEdit, id];
        } else if (rowIsEditIndex >= 0) {
            newIsEdit = isEdit.filter((value, index) => {
                return value !== id;
            })
        }
        setIsEdit(newIsEdit);
    };



    return (
        <>
            <Table>
                <TableBody>
                    {props.tasksList.map((item, index) => {
                        const isEditSelected =  isEdit.includes(item.id);
                        
                        return (
                            <TableRow key={item.id} className={isEditSelected ? "Select" : "no select"}>
                                { 
                                    !isEditSelected && (
                                    <>
                                        <TableCell>
                                            {item.rang}
                                        </TableCell>
                                        <TableCell>
                                            {item.title}
                                        </TableCell>
                                        <TableCell>
                                            {item.experience}
                                        </TableCell>
                                        <TableCell>
                                            <Checkbox
                                                checked={isEditSelected}
                                                icon={<CreateIcon />}
                                                checkedIcon={<CreateIcon />}
                                                onChange={() => {handleClickEdit(item.id)}}
                                            />
                                        </TableCell>
                                    </>
                                )}
                                { 
                                    isEditSelected && (
                                    <>
                                        <TableCell>
                                            <TextField
                                                label="Dense"
                                                value={item.rang}
                                                onChange={(e) => handleChange(item.id, e)}
                                                margin="dense"
                                                variant="outlined"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                label="Dense"
                                                value={item.title}
                                                onChange={(e) => handleChange(item.id, e)}
                                                margin="dense"
                                                variant="outlined"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                label="Dense"
                                                value={item.experience}
                                                margin="dense"
                                                variant="outlined"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton>
                                                <CheckIcon />
                                            </IconButton>
                                            <IconButton onClick={() => {handleClickEdit(item.id)}}>
                                                <CancelIcon />
                                            </IconButton>
                                        </TableCell>
                                    </>
                                )}

                                    
                            </TableRow>        
                        );
                    })}
                </TableBody>
            </Table>
        </>
    );
}

export default Tasks;