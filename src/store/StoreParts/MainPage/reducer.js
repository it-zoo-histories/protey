const initState = {
    "test": 1
}

export default function MPI_mainPageState(state =initState, action){
    const {type, payload} = action;

    switch(type){
        default:
            return state;
    }
}