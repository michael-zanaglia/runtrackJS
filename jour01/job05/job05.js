function afficherJoursSemaines() {
    const joursSemaines= [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche"
    ]

    //     pour i = 1 --- continue la boucle tant que tu n'est pas === aux nombre d'element de ma liste(7) 
    // ; Tu incrementes
    for (let i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]);
    }
}

afficherJoursSemaines();