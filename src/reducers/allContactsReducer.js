export function allContactsReducer(state = [
    {
        id: 0,
        name: "Shalaka Shrawage",
        mobile: "7777777777",
        email: "shalaka@gmail.com",
        isFav: true
    },
    {
        id: 1,
        name: "Abhishek Salvi",
        mobile: "2462462467",
        email: "abbishek.com",
        isFav: false
    },
    {
        id: 2,
        name: "Shalaka Shrawage",
        mobile: "7777777777",
        email: "shalaka@gmail.com",
        isFav: true
    },
    {
        id: 3,
        name: "Abhishek Salvi",
        mobile: "2462462467",
        email: "abbishek.com",
        isFav: false
    },
    {
        id: 4,
        name: "Shalaka Shrawage",
        mobile: "7777777777",
        email: "shalaka@gmail.com",
        isFav: true
    },
    {
        id: 5,
        name: "Abhishek Salvi",
        mobile: "2462462467",
        email: "abbishek.com",
        isFav: false
    },
    {
        id: 6,
        name: "Shalaka Shrawage",
        mobile: "7777777777",
        email: "shalaka@gmail.com",
        isFav: true
    },
    {
        id: 7,
        name: "Abhishek Salvi",
        mobile: "2462462467",
        email: "abbishek.com",
        isFav: true
    }
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