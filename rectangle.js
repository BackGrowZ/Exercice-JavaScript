const fs = require('fs')

var fil1 = process.argv[2];
var fil2 = process.argv[3];

read(fil1,fil2)


function read(fil1,fil2){
    
    var file1 = fs.readFileSync(fil1, "utf8");
    var file2 = fs.readFileSync(fil2, "utf8");
    var index = "Not Found";
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
        if (i == file1.length-1){
            arrayNb=0;
            arrayNb2=0;
        }
    }


    for (i=0; i<file2.length; i++){ // Mise en forme du c2 en tableau 
        if (file2.charAt(i) == "\n"){
            arrayNb++
            arrayNb2=0;
        } else {
            c2_data[arrayNb][arrayNb2] = file2.charAt(i);
            arrayNb2++
        }
    }

    var c1_longeur = c1_data[0].length-1; // 3
    var c1_ligne = c1_data.length-1; // 3

    //console.log(c1_longeur)
    /*
    c1_data[i][j]
    c2_data[k][l]
    */
    var array1_value = 0;
    var array2_value = 0;

    for (i=0; i<c1_data.length; i++){
        for (j=0; j<c1_data[i].length; j++){
            for (k=0; k<c2_data.length; k++){
                for (l=0; l<c2_data[k].length; l++){
                    if ((c2_data[k][l+c1_longeur] != null) && (c2_data[k+c1_ligne] != null) && (c1_data[i] !== undefined) && (c1_data[i][j] !== undefined)){
                        if (c1_data[i+array1_value][j+array2_value] == c2_data[k+array1_value][l+array2_value]){
                            while ((array1_value <= c1_longeur) && (array2_value <= c1_ligne) && index == "Not Found"){
                                if ((array1_value == c1_longeur) && (array2_value == c1_ligne)){
                                    index = k+","+l;
                                    array1_value=0;
                                    array2_value=0;
                                    break
                                } else if ((c1_data[i+array1_value][j+array2_value] == c2_data[k+array1_value][l+array2_value]) && (array2_value < c1_ligne)){
                                    array2_value++
                                } else if ((c1_data[i+array1_value][j+array2_value] == c2_data[k+array1_value][l+array2_value]) && (array2_value == c1_ligne)){
                                    array1_value++
                                    array2_value=0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    sendResult(index)
}

function sendResult(index){
    console.log(index)
}
