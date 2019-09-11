const TOGGLE_VISIBLE_NAV = 'TOGGLE-VISIBLE';

let initialState = {
    isVisibleNav: true
}

const reducerCommon = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_VISIBLE_NAV: {
            return {
                ...state,
                isVisibleNav: !state.isVisibleNav
            }
        }

        default: {
            return state;
        }
    }
}

export const toggleNavVisible = () => ({type: TOGGLE_VISIBLE_NAV});

export default reducerCommon;