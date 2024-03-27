document.addEventListener("DOMContentLoaded", function() {
    function addchara(area, event) {
        area.value += event.key;
        console.log(event.key);
    };
    const area = document.querySelector("#keylogger");
    document.addEventListener("keypress", function(event) {
        addchara(area, event)
    });
});