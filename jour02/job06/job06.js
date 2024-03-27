document.addEventListener("DOMContentLoaded",function(){
    function konami(event, l, count){
        l.push(event.key)
        comboliste = [
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowRight",
            "ArrowLeft",
            "Enter",
            "Enter"
        ];
        console.log(l)
        console.log(l.length);
        console.log("----------------------")
        if (l.length === 7) {
            for (i = 0; i < comboliste.length; i++) {
                if (l[i] === comboliste[i]) {
                    count += 1
                    if (count === 7) {
                        alert("BINGO"); 
                        laPlateforme_();
                    }   
                } else { 
                    alert("loupé");
                    count =  0
                    l.length = 0;
                    console.log(l, "<---");
                    return count;
                };
    
            };
        }else {
            return count;
        }
    }


    function laPlateforme_(){
        const body = document.querySelector("#bod");
        body.style.background = "#0060ff";
    }

    const liste = []
    let count = 0
    document.addEventListener("keydown", function(event) {
       count = konami(event, liste, count);
    });

});