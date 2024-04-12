document.addEventListener("DOMContentLoaded", function(){
    async function jsonValueKey(f, k) {
        fetch(f)
            .then(res => res.json())
            .then(data => {
                //console.log(JSON.stringify(data)); ca rend le dictionnaire en string
                // JSON.parse(data); le transforme en objet
                return data;
            })
            .then(result => {
                for (key in result){
                    if (key === k){
                        console.log(result[k]);
                    };
                };
            })
    };


    const file = "file.json";
    jsonValueKey(file, "city");


});