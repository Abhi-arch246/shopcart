const initialCart = {
    shopcount: []
}

function cartReducer(state = initialCart, action) {
    switch (action.type) {
        case 'ADD_ITEM': return {
            ...state,
            shopcount: [...state.shopcount, action.payload]
        }

        case 'DELETE_ITEM': return {
            ...state,
            shopcount: state.shopcount.filter((task) => task != action.payload)
        }

        case 'SUBMIT': return {
            ...state,
            shopcount: state.shopcount.map((item) => {
                if (item == action.payload.olditem)
                    item = action.payload.newitem

                return item
            })
        }
    }
    return state;
}

export default cartReducer;