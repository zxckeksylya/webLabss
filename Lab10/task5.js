var days = ["воскресенье", "понедельник", "вторник", "среда",
    "четверг", "пятница", "суббота"];
var current = 5;
var n = 10;
if (current == 7)
    current = 0;
var dayAfter = (n + current) % 7;
console.log("\u0414\u0435\u043D\u044C \u043D\u0435\u0434\u0435\u043B\u0438 \u0447\u0435\u0440\u0435\u0437 ".concat(formatDays(n), ": ").concat(days[dayAfter]));
function formatDays(day) {
    switch (day) {
        case 0:
        case 5:
        case 6: return day + " дней";
        case 1: return day + " день";
        default: return day + " дня";
    }
}
