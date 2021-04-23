import userTypes from './user.types';

const setUserId = userId => {
    return {
        type: userTypes.set_user_id,
        payload: userId,
    };
};

export default {
    setUserId
};