let initialState = {
    avatar: "https://u.kanobu.ru/articles/pics/25bf509a-997d-4d78-ad51-789a58efccd0.jpg",
    surname: "Saharov",
    name: "Evgenii",
    rang: "E",
    status: "In progress tasks",
    totayProgress: "100"
}

const reducerUserInfo = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

export default reducerUserInfo;