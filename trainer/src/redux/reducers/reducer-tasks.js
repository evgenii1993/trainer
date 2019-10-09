const ADD_TASK = "ADD-TASK";

let initialState = {
    tasksList: [
        {id: "1", title: "ДЕЛАТЬ РЕАКТ!", rang: "A", experience: "30"},
        {id: "2", title: "ДАВАЙ ДЕЛАЙ!", rang: "В", experience: "20"},
        {id: "3", title: "ДАВАЙ ДЕЛАЙ!", rang: "В", experience: "10"}
    ]
};

const reducerTasks = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                tasksList: [...state.tasksList,
                    {
                        id: state.tasksList.length,
                        title: action.task.title,
                        rang: action.task.rang,
                        experience: action.task.experience
                    }
                ]
            }
        }
        default: 
            return state;
    }
};


export const addTask = (task) => ({
    type: ADD_TASK, task
});


export default reducerTasks;