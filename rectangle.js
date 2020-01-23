const fs = require('fs')

var fil1 = process.argv[2];
var fil2 = process.argv[3];

read(fil1,fil2)


function read(fil1,fil2){
    var chemin1 = '/home/backgrowz/projects/Module-6/'+ fil1;
    var chemin2 = '/home/backgrowz/projects/Module-6/'+ fil2;
    
    var file1 = fs.readFileSync(chemin1, "utf8");
    var file2 = fs.readFileSync(chemin2, "utf8");
    var index = [["0"],["0"]];
    var c1_data = [[],[],[]];
    var c2_data = [[],[],[],[],[]];
    var arrayNb = 0;
    var arrayNb2 = 0;

    for (i=0; i<file1.length; i++){ // Mise en forme du c1 en tableau 
        if (file1.charAt(i) == "\n"){
            arrayNb++
            arrayNb2=0;
        } else {
            c1_data[arrayNb][arrayNb2] = file1.charAt(i);
            arrayNb2++
        }
        
    }

    arrayNb=0;
    arrayNb2=0;

    for (i=0; i<file2.length; i++){ // Mise en forme du c2 en tableau 
        if (file2.charAt(i) == "\n"){
            arrayNb++
            arrayNb2=0;
        } else {
            c2_data[arrayNb][arrayNb2] = file2.charAt(i);
            arrayNb2++
        }
        
    }

   
}

