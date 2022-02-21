
export const playerReducer = (state = [], action) => {

    switch (action.type) {
    case 'add':
        return [...state, action.payload];

    case 'score':
        return state.map(player => {
            if (player.id === action.payload) {

                return {
                    ...player,
                    score: action.score
                };
            } else {
                return player;
            }
        });

    default:
        return state;
    }
};