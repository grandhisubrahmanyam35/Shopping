import userTypes from './user.types';

const defaultState = {
    userId: 1,
    userInfo: {}
};

const userReducer = (currentState = defaultState, action) => {
    switch(action.type) {
        case userTypes.set_user_id:
            return {
                ...currentState,
                userId: action.payload,
            };
        default:
            return currentState;
    }
}

export default userReducer;