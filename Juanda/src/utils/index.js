export const totalPrice = (products) =>{
    let sum = 0
    products.forEach(element => sum += element.price);

    return sum;

}