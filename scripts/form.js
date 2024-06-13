let confirmitem = document.querySelector('#confirm');
console.log("is this working!!!!???")
confirmitem.addEventListener("focusout", () => {
    let passworditem = document.querySelector('#password');
    console.log(passworditem)
    console.log(passworditem.value)
    console.log(confirmitem.value)

    if (confirmitem.value != passworditem.value) {
        document.querySelector('#message').innerText = "Passwords don't match!";
        passworditem.focus()
    }
})