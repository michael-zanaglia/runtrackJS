document.addEventListener("DOMContentLoaded", function() {
    function trier(id, name, type, search){
        let count = 0
        fetch("pokemon.json")
            .then(res => res.json())
            .then(data => {
                if (id !== ""){
                    id = parseInt(id)
                    let result = data.filter((pokemon) => pokemon.id === id);
                    afficher(result,count, search);
                }else if (name !== ""){
                    name = name[0].toUpperCase() + name.slice(1).toLowerCase();
                    let result = data.filter((pokemon) => pokemon.name.english === name || 
                                                            pokemon.name.japanese === name || 
                                                            pokemon.name.chinese === name || 
                                                            pokemon.name.french === name);
                    afficher(result,count, search);
                }else if (type !== ""){
                    let result = data.filter((pokemon) => JSON.stringify(pokemon.type) === JSON.stringify(type))
                    afficher(result,count, search);
                }else {
                    console.log("aucune correspondance");
                }
            });
    };
   
    function afficher(result, count, search) {
        search.innerHTML = "";
        for (x in result){
            for (y in result[x]){
                let p = document.createElement("p");
                p.id = "clear";
                if(Array.isArray(result[x][y])){
                    p.textContent = `${y} : ${JSON.stringify(result[x][y][0])}`
                    search.appendChild(p);
                    p.style.color = "black"
                    p.style.marginTop = "-15px"
                } else if (typeof result[x][y] === 'object') {
                    for (k in result[x][y]) {
                        let p = document.createElement("p");
                        p.id = "clear";
                        if (count === 0 && y === "name"){
                            p.textContent = `${y} :`;
                            search.appendChild(p);
                            p.style.color = "black"
                            p.style.marginTop = "-15px"
                            count += 1;
                        }else if (count === 1 && y === "base") {
                            p.textContent = `${y} :`;
                            search.appendChild(p);
                            p.style.color = "black"
                            p.style.marginTop = "-15px"
                            count += 1;
                        }
                        p.textContent = `${k} : ${result[x][y][k]}`;
                        search.appendChild(p);
                        p.style.color = "black"
                        p.style.marginTop = "-15px"
                    }
                }else {
                    p.textContent = `${y} : ${JSON.stringify(result[x][y])}`;
                    search.appendChild(p);
                    p.style.color = "black"
                   
                }
                
            };
            let a = document.createElement("p");
            a.textContent = "----------------------------------";
            search.appendChild(a);
        };
    };
    
    const form = document.querySelector("#formulaire");
    const btn = document.querySelector("#filter");
    const search = document.querySelector("#search");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        let type = [];
        let id = 0;
        let name = 0;
        const fD = new FormData(form);
        for (item of fD) {
            //console.log(item[0], item[1]);
            if (item[0] === "id"){
                id = item[1]
            }
            else if (item[0] === "nom"){
                name = item[1]
                name = name.charAt(0).toUpperCase()+ name.slice(1);
            }
            else if (item[0] === "type"){
                if (item[1] !== "") {
                    type.push(item[1])
                }
                
            };
        };
        console.log(type)
        trier(id, name, type, search)
    });
});


// slct.options[slct.selectedIndex].text);
// slct2.options[slct2.selectedIndex].text);