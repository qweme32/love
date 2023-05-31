const timer = document.querySelector(".timer");
const entry = () => {
    let now = Math.floor(Date.now() / 1000);
    let time = moment.duration(now - 1682532337, 'seconds');

    timer.innerHTML = `<span>${time.months()}M ${time.days()}D</span> ${time.hours()}H ${time.minutes()}M ${time.seconds()}S`

    setTimeout(entry, 1000);
}

entry();