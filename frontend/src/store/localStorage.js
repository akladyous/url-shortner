export const loadState = (slice=null) => {
    try {
        const state = localStorage.getItem('state');
        if (state === null) {
            return undefined;
        }
        return JSON.parse(state);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (err) {
    };
};
