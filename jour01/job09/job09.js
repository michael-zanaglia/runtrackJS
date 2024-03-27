function tri(list, opt) {
    // a et b reprensente la comparaison de deux element dans une liste

    if (opt === "asc") {
        // si ca fait un nombre '-' alors b est place avant a sinon inversement
        list.sort((a,b) => a - b);
        console.log(list);
    }
    else if (opt === "desc") {
        // si ca fait un nombre '-' alors b est avant a sinon inversement
        list.sort((a,b) => b - a);
        console.log(list);
    }
}


l = [10000, 25, 400, 75, 2, 8, 2555]

tri(l, "desc")