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
   
   for (i=0;i<c2_data.length;i++){
       for (x=0;x<c2_data[i].length;x++){
           if (c2_data[i][x+2] != null && c1_data[x] !== undefined){
                if (c1_data[0][0] == c2_data[i][x] && c1_data[0][1] == c2_data[i][x+1] && c1_data[0][2] == c2_data[i][x+2]){ 
                    if (c1_data[1][0] == c2_data[i+1][x] && c1_data[1][1] == c2_data[i+1][x+1] && c1_data[1][2] == c2_data[i+1][x+2]){ 
                        if (c1_data[2][0] == c2_data[i+2][x] && c1_data[2][1] == c2_data[i+2][x+1] && c1_data[2][2] == c2_data[i+2][x+2]){ 
                            index = i+","+x;
                            sendResult(index)
                        }
                    }
                } 
            }
        }
    }
}

function sendResult(index){
    console.log(index)
}
