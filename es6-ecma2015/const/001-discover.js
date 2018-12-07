// const équivaut à let
// sauf que : obligé faire une assignation, pas de nouvelle assignation


function useConstFailed() {

}

// Ne fonctionne pas => on assigne une nouvelle valeur à i
function useConstWithForFailed() { 
    try {
        for(const i=0; i < 10; i ++) {
            console.log(i);
        }    
    } catch (error) {
        console.error(error.message);
    }
}

// le for crée un context par itération (binding)
function useConstWithForRun() {
    for(const x in ['o', 'u', 't', 'i', 'n', 'i']) {
        console.log(x);
    }
}

useConstWithForFailed();
useConstWithForRun();