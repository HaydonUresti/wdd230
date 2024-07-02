let today = new Date();
const DAY_IN_MILLIS = 1000 * 60 * 60 * 24;
const LAST_VIST_KEY = "last-visit";



function getMessage() {

    let lastvisit = localStorage.getItem(LAST_VIST_KEY);
    // lastvisit = Math.floor(lastvisit / DAY_IN_MILLIS);
    let message = "Welcome! Let us know if you have any questions.";

    if (lastvisit == null) {
        return message;
    }

    lastvisit = parseInt(lastvisit);
    let datdiff = today.getTime() - lastvisit;
    if (datdiff < DAY_IN_MILLIS) {
        message = "Back so soon! Awesome!";
        return message;
    }

    if (lastvisit < DAY_IN_MILLIS * 2) {
        return "You last visited 1 day ago";
    }
    let daysSinceLastVisit = Math.floor(datdiff / DAY_IN_MILLIS);

    return `You last visited ${daysSinceLastVisit} days ago.`;
}


let message = getMessage();
document.getElementById("dicover-message").innerHTML = message;
localStorage.setItem(LAST_VIST_KEY, `${today.getTime()}`);