var args = process.argv[2];
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
    console.log(result)
}
