document.addEventListener("DOMContentLoaded", function() {
    const addOne = (p, para) => {
        p += 1;
        para.textContent = p;
    }

    const btn = document.querySelector("#button");
    btn.addEventListener("click", () => {
        // Je recupere une valeur string que je transforme en num donc
        // pour mettre a jour mon objet je creer para
        let p = parseInt(document.getElementById("compteur").textContent);
        const para = document.getElementById("compteur");
        addOne(p, para);
    });
    
});