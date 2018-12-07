class Droide {
    constructor(matricule) {
        this._matricule = matricule;
    }

    shoot(droide) {
        console.log("shoot : " + this._matricule);
    }
 }

class R2 extends Droide {
    constructor(matricule) {
        super(matricule);
    }

    shoot(droide) {
        super.shoot(droide);
        console.log("and then ?");
    }
}

module.exports = {
    droide : Droide,
    r2: R2
}