document.addEventListener("DOMContentLoaded", function(){
        const showhide = (bin) => {
            if (bin === 1) {
                return 0;
            } else {
                return 1;
            }
        }
        
        let binary = 0
        const btn = document.querySelector("#button");
        const a = document.getElementById("citation");
        btn.addEventListener("click", () => {
            if (binary === 1) { 
                binary = showhide(binary);
                // logique 1
                //-----> a.innerHTML = "“L'important n'est pas la chute, mais l'atterrissage.”";
                // Logique 2 (recommandé)
                a.style.display = "block";
            } else {
                binary = showhide(binary);
                a.style.display = "none";
            }
        });
});