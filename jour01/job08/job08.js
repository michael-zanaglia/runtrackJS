function sommeNombresPremiers(nb1, nb2) {
    const tot = nb1 + nb2
    let compteurDiviseur1 = 0
    let compteurDiviseur2 = 0
    for (let i = 1; i < tot + 1; i++) {
        if (nb1 % i === 0) {
            compteurDiviseur1 += 1
        }
        if (nb2 % i === 0) {
            compteurDiviseur2 += 1
        }
    }

    if (compteurDiviseur1 === 2 && compteurDiviseur2 === 2) {
        console.log(`${nb1} + ${nb2} =`, tot);
    }
    else {
        console.log("L'un des deux nombres n'est pas premier");
    }
}
//alt96 => `` 
sommeNombresPremiers(11,3)