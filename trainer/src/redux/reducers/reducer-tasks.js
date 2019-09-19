let initialState = {
    tasksList: [
        {id: "1", title: "ДЕЛАТЬ РЕАКТ!", rang: "A", experience: "30"},
        {id: "2", title: "ДАВАЙ ДЕЛАЙ!", rang: "В", experience: "20"},
        {id: "3", title: "ДАВАЙ ДЕЛАЙ!", rang: "В", experience: "10"}
    ]
}

const reducerTasks = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}



export default reducerTasks;