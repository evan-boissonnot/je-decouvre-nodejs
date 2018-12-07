// var est scopé à la fonction
function orderWithLet(x, y) {
    if(x > y) {
        let tmp = x;
        x = y;
        y = tmp;
    }

    try {
        console.log("orderWithLet : " + tmp === x);    
    } catch (error) {
        console.log(error.message);
    }    

    return [x, y];
}

function orderWithVar(x, y) {
    if(x > y) {
        var tmp = x;
        x = y;
        y = tmp;
    }

    console.log("orderWithVar : " + tmp == x);
    return [x, y];
}

orderWithLet();
orderWithVar();