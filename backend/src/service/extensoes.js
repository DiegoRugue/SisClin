
Object.prototype.val = function(i = 1) {
    return Object.values(this)[i - 1]
}

Object.prototype.success = function(i = 1) {
    return !Object.values(this)[i - 1];
}
