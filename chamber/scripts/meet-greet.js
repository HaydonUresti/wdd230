let dayOfWeek = new Date().getDay();

if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    document.querySelector(".meet-greet").classList.add("show");
}