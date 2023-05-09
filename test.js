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





