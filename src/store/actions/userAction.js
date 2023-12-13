export const setUserData = (Fullname, Email, url) => ({
    type: 'SET_USER_DATA',
    payload: { Fullname, Email, url },
});

const initialState = {
    Fullname: '',
    Email: '',
    imageUrl: null,
};

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                Fullname: action.payload.Fullname,
                Email: action.payload.Email,
                imageUrl: action.payload.url,
            };
        default:
            return state;
    }
};

export default personReducer;
