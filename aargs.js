var n = 0, a;
module.exports = {};

// Join short flags with '='
var args = process.argv.join(' ').replace(/ -([a-zA-Z]) ([a-zA-Z0-9])/g, " -$1=$2");

args.split(' ').forEach((v,k) => {
    if(v.match(/^-{1,2}/)){
        a = v.replace(/^-*/,'').split('=');
        k = a[0];
        v = a[1] || true;
    }else{
        k = n++;
    }
    module.exports[k] = v;
});