var checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {

    /*  Kattintás után adja hozzá a divhez a dark classt  */ 

    document.body.classList.toggle("dark")

})