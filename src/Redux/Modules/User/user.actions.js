const setUserId = userId => {
    return {
        type: 'set_user_id',
        payload: userId,
    };
};

export default {
    setUserId
};