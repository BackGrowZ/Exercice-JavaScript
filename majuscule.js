var args = process.argv.slice(2);
majuscule(args)

function majuscule(args){
    var phrase = args;
    var nbCaracteres = phrase[0].length;
    var result="";

    for (i=0; i<=nbCaracteres; i++) {

        if (i%2 == 0){
            //console.log(phrase[0].charAt(i))
            result = result + phrase[0].charAt(i).toLowerCase();
        } else {
            result = result + phrase[0].charAt(i).toUpperCase();
            //console.log(i + " Majuscule")
        }
    }
    
    /*
    1) compter le nombre de caractere ".length"
    2) boucle for pour minuscule au caractere 0 et incrémenter +2 avec max a nbCaracteres
    3) boucle for pour majuscule au caractere 1 et incrementer +2 avec max a nbCaracteres
    */

    console.log(result)
}