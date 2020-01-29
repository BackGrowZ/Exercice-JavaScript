const fs = require('fs')

var mot = process.argv[2];
var file = process.argv[3];

read(mot,file)

function read(mot,file){
    var fileSource = fs.readFileSync(file, "utf8");
    var file_Data = [[],[],[],[],[]];
    var mot_Data = [];
    var arrayNb = 0;
    var arrayNb2 = 0;

    for (i=0; i<fileSource.length; i++){ // Change file to array 
        if (fileSource.charAt(i) == "\n"){
            arrayNb++
            arrayNb2=0;
        } else {
            file_Data[arrayNb][arrayNb2] = fileSource.charAt(i);
            arrayNb2++
        }
        if (i==fileSource.length-1){
            arrayNb=0;
            arrayNb2=0;
        }
    }

    for (i=0; i<mot.length; i++){ // Change args to array 
        mot_Data[arrayNb] = mot.charAt(i);
        arrayNb++
    }

    
    for (i=0;i<file_Data.length;i++){ // pour selectionner le mot 
        if (file_Data[i].length != mot_Data.length){ // verrifie que les mot a la meme longeur 
            file_Data.splice(i, 1)
        } else {
            for (v=0;v<mot_Data.length;v++){ 
                if (mot_Data.indexOf(file_Data[i][v]) == -1){
                    file_Data.splice(i, 1)
                }
            }
        }
    }
    
    console.log(file_Data)
}
