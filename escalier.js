var args = process.argv[2];
function escalier(nb) {
    var texteAdd = "#";
    var retourLigne = "\n";
    var spacer = " ";
    var test2 = [];
    var result = [];


    for (i = 0; i < nb; i++) { // test[i]
        var nbSpacer = nb - i; // 4 espace 
        var nbText = nb - nbSpacer +1; // 1 text
        test2[i] = [""];

        for (x = 1; x < nbSpacer; x++) { 
            test2[i] = test2[i] + spacer;
        }
        for (x = 0; x < nbText; x++) { 
            test2[i] = test2[i] + texteAdd;
        }        
  
        test2[i] = test2[i] + retourLigne;
        result = result + test2[i]
    }
        console.log(result)
    
}



escalier(args)


