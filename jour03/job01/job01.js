$(document).ready(function(){
    const showhide = (bin, p) => {
        if (bin === 0) {
            p.hide();
            bin = 1;
            return bin;
        } else {
            p.show();
            bin = 0;
            return bin;
        };
    }
    
    const p = $("#txt");
    const btn = $("#btn");
    let binary = 0;
    btn.click(function(){
        binary = showhide(binary, p);
    });

});