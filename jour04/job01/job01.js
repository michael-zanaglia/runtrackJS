document.addEventListener("DOMContentLoaded", function() {
    async function takedata(p) {
        fetch("expression.txt")
            .then(res => res.text())
            .then(res => {
                console.log(res);
                return res;})
            .then(res => { 
                p.textContent = res;
                document.body.appendChild(p);})
            .catch(error => console.log("erreur:",error)); 
;
    }

    const p = document.createElement("p");
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        takedata(p);
    });

});