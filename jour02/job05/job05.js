document.addEventListener("DOMContentLoaded", function(){

    function pourcent(f) {
        const over = document.querySelector(".green");
        // Je recupere la position la plus basse de mon footer atteindre les 100% au plus bas.
        const footPos = parseInt(f.getBoundingClientRect().bottom.toFixed());
        // Ce calcul me permet de connaitre exactement la position de mon footer sur l'ecran.
        let elementPos = footPos + window.scrollY;
        // Je le met en pourcentange
        let calcul = Math.round((elementPos / 4096) * 100);
        console.log(" Total -->", calcul, "<-- %");
        // J'ai du cree une div et en faire un overlay qui prendra une position absolue et sa taille 
        // changera en fonction du pourcentage. 
        over.style.position = "absolute";
        over.style.top = 0;
        over.style.left = 0;
        over.style.width = `${calcul}%`;
        

    };
    
    const footer = document.querySelector("#load");
    document.addEventListener("scroll", () => {
        pourcent(footer);
    });
});
