let days = ["воскресенье", "понедельник", "вторник", "среда",
            "четверг", "пятница", "суббота"];
 
        let current = 5
        let n =10
 
        if (current == 7)
            current = 0;
        let dayAfter = (n + current) % 7;
        console.log(`День недели через ${formatDays(n)}: ${days[dayAfter]}`);
 
        function formatDays(day) {
            switch (day) {
                case 0:
                case 5:
                case 6: return day + " дней";
                case 1: return day + " день";
                default: return day + " дня";
            }
        }