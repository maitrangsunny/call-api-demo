var initialState = [
    {
        id: 1,
        name: "Iphone 6 Plus",
        price: 500,
        status: true
    },
    {
        id: 1,
        name: "Sam sung",
        price: 300,
        status: true
    },
    {
        id: 1,
        name: "Asus",
        price: 200,
        status: false
    }
];

const products = (state = initialState, action) =>{
    switch(action.type){
        default: return[...state]
    }
};
export default products;