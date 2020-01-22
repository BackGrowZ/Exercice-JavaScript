var args = process.argv.slice(2);
factoriel(args)

function factoriel(args){
    var result;

    for (i=args - 1; i>=1; i--){
        if (i == args -1){
            result = args * i;
        } else {
            result = result * i;
        }
        //console.log(result)

    }

    console.log(result)
}