$(document).ready(function() {
    
    function pagination(click) {
        if (click === "1") {
            $(".pagination .page-item:nth-child(1)").addClass("disabled");
            $(".pagination .page-item:nth-child(2)").addClass("active");
            $(".pagination .page-item:nth-child(5)").removeClass("disabled")
        } else if (click === "2") {
            $(".pagination .page-item:nth-child(3)").addClass("active");
            $(".pagination .page-item:first-child").removeClass("disabled");
            $(".pagination .page-item:nth-child(5)").removeClass("disabled");
        } else if (click === "3") {
            $(".pagination .page-item:first-child").removeClass("disabled");
            $(".pagination .page-item:nth-child(4)").addClass("active");
            $(".pagination .page-item:nth-child(5)").addClass("disabled");
        }; 

        for (element in pagesFormJson) {
            for (key in pagesFormJson[element]){
                if (click === key) {
                    $(".pp").text(pagesFormJson[element][key]);
                };
            } ; 
        };
    };

    function Reduce(){
        $("#pro").css("width", "-=5");
    };
    function Rise(){
        $("#pro").css("width", "+=5");
    };

    let inter;
    const link = $("#exo");
    const btn = $(".btrfly");
    const opacity = $(".opacity");
    const reboot = $(".reboot");
    const page = $(".page-link");
    const back = $("#recule");
    const rise = $("#avance");
    const ho = $(".ho");
    let current_page = 2;
    const pagesFormJson = [
        {
            1 :"Il existe plusieurs visions du terme :\nle monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison.\nLe sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement plus ou moins naturel."
        },
        {
            2 : "You look lonely... i can fix that\n It's the moment he realizes, or is at least reminded, that JOI is a product, that “Joe” isn’t a pet name just for him, just a programmed name that any user would get.\n He’s just another customer, and JOI was just a consumer product. His loneliness is solidified in that moment. Their relationship was no more special than any other users"
        },
        {
            3 : "Zeri la lueur de Zaun \nZeri est une jeune femme vive et téméraire originaire des quartiers défavorisés de Zaun.\nElle canalise son électricité intérieure afin de la charger dans un fusil conçu spécialement pour elle.\nSon pouvoir magique est le reflet de ses émotions, et ses étincelles sont aussi fulgurantes que son caractère."
        }
    ];
   
    ho.click(function(){
        ho.css({
            "background-color": "white",
            "color" : "black",
            "border-radius" : "3px"
        });
        let choose = $(this);
        choose.css({
            "background-color": "#0078ff", 
            "color": "whitesmoke",
            "border-radius" : "3px"
        });
    });

    page.click(function(){
        let clicked = $(this).text().trim();
        $(".pagination .page-item").removeClass("active");
        if (clicked === "1") {
            pagination(clicked);
            current_page = 2;
        } else if (clicked === "2") {
            pagination(clicked);
            current_page = 3;
        } else if (clicked === "3") {
            pagination(clicked);
            current_page = 4;
        } else if (clicked === "»") {
            current_page++;
            pagination((current_page-1).toString());
        } else if (clicked === "«") {
            current_page--;
            pagination((current_page-1).toString());
        };
    });

    link.click(function(){
        console.log("clcik");
        link.attr("href", "https://laplateforme.io/");
    });
    btn.click(function(){
        opacity.css("opacity", 0.5);
        const over = $(".overlay").css("display", "block");
        const btnNo = $("#NO");
        btnNo.click(function(){
            opacity.css("opacity", 1);
            const over = $(".overlay").css("display", "none");
        });
    });
    reboot.click(function(){
        const ligne = $(".pp").text("Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie.");
        const quote = $(".quote").css("display", "block");
    });

    back.on("mousedown", function(){
        clearInterval(inter);
        inter = setInterval(Reduce, 25);
        back.on("mouseup", function(){
            clearInterval(inter);
            $(document).off("mouseup");
            inter = null;
        });
    });

    rise.on("mousedown", function(){
        clearInterval(inter);
        inter = setInterval(Rise, 25);
        rise.on("mouseup", function(){
            clearInterval(inter);
            $(document).off("mouseup");
            inter = null;   
        });
    });

});


// $("body").css("background-color", "black");