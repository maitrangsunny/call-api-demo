import * as Types from '../constants/ActionTypes';

var initialState = [];

const products = (state = initialState, action) =>{
    var result = -1;
    var {id, product} = action;
    var findIndex = (products,id)=>{
		products.forEach((product,index)=>{
			if(product.id===id){
				result = index;
			}
		})
		return result;
	}
    switch(action.type){
       
        case Types.FETCH_PRODUCTS:
            state = action.payload
            return [...state];
        case Types.DELETE_PRODUCT:
            console.log(action);
            var index = findIndex(state,id);
            state.splice(index,1);
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            console.log(action);
            var index = findIndex(state,product.id);
            state[index] = product
            return [...state];
        default: return[...state]
    }
};
export default products;