import { playerReducer } from '../../components/playerReducer';

const demoPlayers = [{
    id: 'player1',
    name: 'player1',
    score: 5
},{
    id: 'player2',
    name: 'player2',
    score: 15
}];

describe('testing in playerReducer', () => {

    test('should return the default state', () => {

        const state = playerReducer(demoPlayers, {});
        expect( state ).toEqual( demoPlayers );
      
    });

    test('should add new player', () => {

        const newPlayer = {
            id: 'player3',
            name: 'player3',
            score: 7
        };

        const action = {
            type: 'add',
            payload: newPlayer,
        };

        const state = playerReducer(demoPlayers, action);
        expect (state.length).toBe( 3 );
        expect (state).toEqual( [...demoPlayers, newPlayer ] );
    });

    test('should add new score value', () => {

        const action = {
            type: 'score',
            payload: 'player2',
            score: 18
        };

        const state = playerReducer(demoPlayers, action);
        expect (state[1].score).toBe( 18 );
      
    })
    
    
    
  
})
