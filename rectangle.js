const fs = require('fs')
var fil1 = process.argv[2];
var fil2 = process.argv[3];
get(fil1,fil2)


function get(fil1,fil2){
    var chemin = '/home/backgrowz/projects/Module-6/';
    var chemin1 = '/home/backgrowz/projects/Module-6/'+ fil1;
    var chemin2 = '/home/backgrowz/projects/Module-6/'+ fil2;
    console.log(chemin1)
    console.log(chemin2)
    
    fs.readFile(chemin + fil1, 'utf8', (err, data) => {
        if (err) throw err;
        file1 = data;
        console.log(file1)
    });
    
    //console.log(file1)
}

