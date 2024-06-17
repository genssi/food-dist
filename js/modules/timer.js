function timer(id, deadline) {
    //timer
    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;

        const t = Date.parse(endtime) - Date.parse(new Date()); //преобразуем строку в числовой формат даты и получаем остаток миллисекунд.
        if (t <= 0) {
            //если таймер будет равен нулю, числа будут 0 а не уйдут в минус
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)); // вычисляем дни
            hours = Math.floor((t / (1000 * 60 * 60)) % 24); //часы
            minutes = Math.floor((t / 1000 / 60) % 60); //минуты
            seconds = Math.floor((t / 1000) % 60); //секунды
        }

        return {
            //возрвращаем обьект с вычисленными данными
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }

    function getZero(num) {
        // добовляем 0 к таймеру если число в таймере меньше 10 -> (09, 08, 07 и тд.)
        if (num > 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(".timer");
        const days = timer.querySelector("#days");
        const hours = timer.querySelector("#hours");
        const minutes = timer.querySelector("#minutes");
        const seconds = timer.querySelector("#seconds");
        const timeInterval = setInterval(updateClock, 1000); // Вызывем обновление таймера каждую секунду.

        updateClock(); // Это для того чтобы при обновлении страницы, таймер не перезагружался вместе.

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                // если таймер истек то останавливаем его.
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
}

export default timer;