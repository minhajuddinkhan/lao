module.exports = function(obj, arg) {

    return obj.hasOwnProperty(arg)
       ? obj[arg]
       : deep(obj, arg);

};

function deep(obj,  arg) {
    if(typeof obj !== 'object') return false;
    if(obj.hasOwnProperty(arg))
        return obj[arg];
    else {
        if(!Object.keys(obj).length) return false;
        const result = Object.keys(obj)
            .map((key) => deep(obj[key], arg))
            .filter((val) => !!val);
        return result.length ? result[0] : false;
    }
}