var sentence = 'Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч.';
function checkPanagrama(str) {
    var arrForCheck = str.toLowerCase().split('').filter(function (p) { return (p != ' ' && p != ',' && p != '.' && p != '—' && p != '!' && p != '?'); });
    var newArr = [];
    var k = true;
    var _loop_1 = function (i) {
        if (newArr.find(function (p) { return p == arrForCheck[i]; })) {
            k = false;
            return "break";
        }
        else {
            newArr.push(arrForCheck[i]);
        }
    };
    for (var i = 0; i < arrForCheck.length; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    if (!(newArr.length == 33)) {
        k = false;
    }
    return k;
}
console.log(checkPanagrama(sentence));
