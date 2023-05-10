class Personnage {
    constructor(pseudo, classe, sante, attaque, niveau){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = niveau;
    }

    get informations() {
        return "Ce personnage s'appelle " + this.pseudo + ", c'est un " 
        + this.classe + ", a " 
        + this.sante + " points de santé et est au niveau " + this.niveau;
    }

    evoluer(){
        this.niveau++;
        console.log(this.pseudo + " passe au niveau " + this.niveau + " !");
    }
    verifierSante(){
        if(this.sante <= 0){
            this.sante = 0;
            console.log(this.pseudo + " a perdu !");
        }
    }
}

class Magicien extends Personnage{
    constructor(pseudo, classe, sante, attaque, niveau){
        super(pseudo, classe  = "Magicien", sante = 170, attaque = 90, niveau);
    }

    attaquer(personnage){
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " 
        + personnage.pseudo + " en lançant un sort " + this.degats + " dégats!");
        this.verifierSante();
    }

    coupSpecial(personnage){
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes " 
        + personnage.pseudo + (this.attaque * 5) + " dégats!");
        this.evoluer();
        this.verifierSante();
    }
}

class Guerrier extends Personnage{
    constructor(pseudo, classe, sante, attaque, niveau){
        super(pseudo, classe  = "Guerrier", sante = 350, attaque = 50, niveau);
    }

    attaquer(personnage){
        personnage.santé -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo 
        + " avec son épée " + this.degats + " dégats!");
        this.evoluer();
        this.verifierSante();
    }

    coupSpecial(personnage){
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo 
            + " attaque avec son coup spécial haches de guerre " 
            + personnage.pseudo + (this.degats * 5) + " dégats!");
        this.evoluer();
        this.verifierSante();
    }
}







