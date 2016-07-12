var n = 0, i = 0, arg, arr, key, val;
module.exports = {};

for(var i=0, l=process.argv.length; i<l; i++){
    arg = process.argv[i];

    // Skip null values
    if(arg===null) continue;

    // --foo
    // --foo=bar
    if(arg.match(/^--/)){
        arr = arg.replace(/^-*/,'').split('=');
        module.exports[arr[0]] = arr[1] || true;
        continue
    }

    // -a
    // -a value
    if(arg.match(/^-[^\-]/)){
        key = arg.replace(/^-/,'');
        if(process.argv[i+1] && process.argv[i+1].match(/^[^\-]/)){
            module.exports[key] = process.argv[i+1];
            process.argv[i+1]   = null;
        }else{
            module.exports[key] = true;
        }
        continue;
    }

    
    module.exports[n++] = arg;
}