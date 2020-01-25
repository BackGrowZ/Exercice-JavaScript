const fs = require('fs')

var file = process.argv[2];

read(file)

function read(file){
    var fileSource = fs.readFileSync(file, "utf8");
    var file_Data = [[],[],[],[],[],[],[],[],[],[],[]];
    var arrayNb = 0;
    var arrayNb2 = 0;
    var edit = [0,0];
    var allPossibility=["1","2","3","4","5","6","7","8","9"];
    var horizontalNotFound = [];

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
    

   //Horizontal
    for (i=0;i<file_Data.length;i++){
        if (file_Data[i].indexOf("_") != -1){
            for(k=1;k<9;k++){
                if(file_Data[i].indexOf(allPossibility[k]) == -1){
                    edit = [i,file_Data[i].indexOf("_")];
                    file_Data[edit[0]][edit[1]] = allPossibility[k]
                    
                }
            }
        }
    }
     console.log(file_Data)
}