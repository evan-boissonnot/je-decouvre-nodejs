function action() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('roaaaarrrrr');
        }, 300);
    });
} 

const promise2 = action();
const promise3 = promise2.then((result) => {console.log(result);}, (error) => {console.log(error)});


