export function allContactsReducer(state = [
    {
        id: 0,
        name: "Shalaka Shrawage",
        mobile: "9999999999",
        email: "shalaka@gmail.com",
        isFav: true
    },
    {
        id: 1,
        name: "Abhishek Salvi",
        mobile: "9999998999",
        email: "abbishek.com",
        isFav: false
    },
], action) {
    switch(action.type) {
        case 'NEW_CONTACT':
            return [...state, {...action.payload, isFav: false, id: (state? state[state.length-1].id+1: 0)}]
        case 'TOGGLE_FAV':
            let copyState = [...state]
            state.forEach((element, i) => {
                if(action.payload === element.id) {
                    copyState[i].isFav = !state[i].isFav
                }
            })
            return copyState
        default:
            return state
    }
}