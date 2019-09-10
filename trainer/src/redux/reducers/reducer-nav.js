const TOGGLE_VISIBLE = 'TOGGLE-VISIBLE';

let initialState = {
    isVisible: false
}

const reducerNav = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_VISIBLE: {
            return {
                ...state,
                isVisible: !state.isVisible
            }
        }

        default: {
            return state;
        }
    }
}

export const toggleNavVisible = () => ({type: TOGGLE_VISIBLE});

export default reducerNav;