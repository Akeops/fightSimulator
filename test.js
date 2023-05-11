class Personnage {
    constructor(pseudo, classe, sante, attaque){
        this.pseudo  = pseudo;
        this.classe  = classe;
        this.sante   = sante;
        this.attaque = attaque;
        this.niveau  =  1;
    }

    get informations() {
        return "Ce personnage s'appelle " + this.pseudo + ", c'est un " 
        + this.classe + ", il a " 
        + this.sante + " points de santé et est au niveau " + this.niveau;
    }

    evoluer(){
        this.niveau += 1;
        console.log(this.pseudo + " passe au niveau " + this.niveau + " !");
    }
    verifierSante(){
        if(this.sante <= 0){
            this.sante == 0;
            console.log(this.pseudo + " a perdu !");
        }
    }
}

class Magicien extends Personnage{
    constructor(pseudo){
        super(pseudo, "Magicien", 170, 90);
    }

    attaquer(personnage){
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " 
        + personnage.pseudo + " en lançant un sort qui fait " + this.attaque + " dégats!");
        personnage.verifierSante();
    }

    coupSpecial(personnage){
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes sur " 
        + personnage.pseudo + " " + (this.attaque * 5) + " dégats!");
        this.evoluer();
        personnage.verifierSante();
    }
}

class Guerrier extends Personnage{
    constructor(pseudo){
        super(pseudo, "Guerrier", 350, 50);
    }

    attaquer(personnage){
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo 
        + " avec son épée " + this.attaque + " dégats!");
        this.evoluer();
        personnage.verifierSante();
    }

    coupSpecial(personnage){
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo 
            + " attaque avec son coup spécial haches de guerre " 
            + personnage.pseudo + (this.attaque * 5) + " dégats!");
        this.evoluer();
        personnage.verifierSante();
    }
}

var gandalf = new Magicien("Gandalf");
var thor    = new Guerrier("Thor");

console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);








