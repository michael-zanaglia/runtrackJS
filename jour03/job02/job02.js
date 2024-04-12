$(document).ready(function(){
    function shuffle (l, bigDiv) {
        // Melange la liste initiale de div 
        let shuf = l.sort((a,b) => 0.5 - Math.random());
        for (i=0; i < l.length; i++) {
            // pour chaque div je supprime la ligne et je rajoute une nouvelle
            l[i].remove(); //removeChild           |==================================\ 
                                            //     |  Il s'agit dela version en DOM    >
            bigDiv.append(shuf[i]); //appendChild  |==================================/
        }   
        return [shuf, 1];
    };
    
    function position(img, l2, winloose, c, play){
        if (play === 1) {
            winloose.push(img);
            let wincon = {img1:g1,img2:g2,img3:g3,img4:g4,img5:g5,img6:g6};
            l2.forEach(function(g) {
                g.click(function(){
                    g.attr("id", img.attr("id"));
                    img.remove(); 
                    console.log("coucou", c);
                    for (key in wincon){
                        if (key === wincon[key].attr("id")){
                            console.log(key,"===",wincon[key].attr("id"));
                            c+=1;
                            console.log("oui +1", key);
                            console.log(c)
                            if (winloose.length === 6){
                                winning(c,winloose, play);
                            };
                        };
                    };
                    
                });
            });
        };
    };

    function winning(c, wl, play) {
        if (c === 6) {
            alert("YOU WIN!");
            c = 0
            wl.length = 0;
            play = 0
        }else{
            alert("loose");
            c=0
            wl.length = 0;
            play =0
        };
    };
    
    const bigDiv = $(".imgs-grid");
    let play = 1
    const g1 = $("#gri1");
    const g2 = $("#gri2");
    const g3 = $("#gri3");
    const g4 = $("#gri4");
    const g5 = $("#gri5");
    const g6 = $("#gri6");

    const img1 = $("#img1");
    const img2 = $("#img2");
    const img3 = $("#img3");
    const img4 = $("#img4");
    const img5 = $("#img5");
    const img6 = $("#img6");
    const btn = $("#btn");

    let verif = 0;
    let liste = [img1, img2, img3, img4, img5, img6];
    let liste2 = [g1, g2, g3, g4, g5, g6];
    let winloose = [];
    let count = 0;

    btn.click(function(){
        [liste, verif] = shuffle(liste, bigDiv);
        if (verif === 1) {
            // Pour chaque img dans liste... si je clique sur une img
            liste.forEach(function(img){
                img.click(function(){
                    position($(this), liste2, winloose, count, play);
                    console.log("===>",winloose);
                });
            });
        };
    });


});