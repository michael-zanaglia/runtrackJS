document.addEventListener("DOMContentLoaded", function(){
    async function avert(pre, pr, p) {
        if (pre.value.length < 2){
            p.textContent = "Trop court !";
            pr.appendChild(p);
        }else if (pre.value.length > 2 && pre.value.length < 8){
            p.textContent = "Moyen.";
            pr.appendChild(p);
        }else if (pre.value.length > 7){
            p.textContent = "Eleve !";
            pr.appendChild(p);
        }

    }
    
    const p = document.createElement("p");
    p.id = "font"
    const pre = document.querySelector("#div1");
    const name = document.querySelector("#div2");
    const nom = document.querySelector("#nom");
    const prenom = document.querySelector("#id");
    pre.addEventListener("keydown", (event) => {
        avert(prenom, pre, p);
    });
    name.addEventListener("keydown", (event) => {
        avert(nom, name, p);
    });
    


});