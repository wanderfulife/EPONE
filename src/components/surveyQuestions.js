// 🅿️ ENQUÊTE STATIONNEMENT - ÉPÔNE / MÉZIÈRES
// Questions pour l'enquête sur le stationnement à la gare d'Épône-Mézières

export const templateSurveyQuestions = [

    // 🅿️ Q1 - Lieu du stationnement du véhicule
     {
        id: "Q1",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le lieu...",
        next: "Q2"
    },

    // 🎯 Q2 - Raison principale pour laquelle la personne vient de se garer
    {
        id: "Q2",
        text: "Raison principale pour laquelle la personne vient de se garer :",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Prendre le train", next: "Q3" },
            { id: 2, text: "Prendre le bus", next: "Q3" },
            { id: 3, text: "Accompagner un voyageur en gare", next: "Q3" },
            { id: 4, text: "Travail à la gare ou dans le quartier", next: "Q3" },
            { id: 5, text: "Habite dans le quartier", next: "Q3" },
            { id: 6, text: "Se rend dans un commerce/administration/service du quartier", next: "Q3" },
            { id: 7, text: "Rend visite à quelqu'un du quartier", next: "Q3" },
            { id: 8, text: "Autre, préciser", next: "Q2_Autre" }
        ]
    },

    // 📝 Q2_Autre - Préciser la raison
    {
        id: "Q2_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser la raison...",
        next: "Q3"
    },

    // ⏱️ Q3 - Durée du stationnement
    {
        id: "Q3",
        text: "Durée du stationnement :",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 2h", next: "end" },
            { id: 2, text: "2 à 4h", next: "end" },
            { id: 3, text: "4 à 6h", next: "end" },
            { id: 4, text: "Plus de 6h", next: "Q4" }
        ]
    },

    // 📍 Q4 - Origine du déplacement : commune
    {
        id: "Q4",
        text: "Origine du déplacement : nom de la commune",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Épône", next: "Q4a" },
            { id: 2, text: "Mézières-sur-Seine", next: "Q4a" },
            { id: 3, text: "Autre commune", next: "Q4_Autre" }
        ]
    },

    // 🏘️ Q4a - Précision pour Épône ou Mézières-sur-Seine
    {
        id: "Q4a",
        text: "Préciser la rue, le quartier ou le lieu remarquable :",
        type: 'freeText',
        freeTextPlaceholder: "Rue, quartier ou lieu remarquable...",
        image: "/plan.png",
        imageAlt: "Plan d'Épône-Mézières",
        next: "end"
    },

    // 🏙️ Q4_Autre - Autre commune
    {
        id: "Q4_Autre",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "end"
    }
];
