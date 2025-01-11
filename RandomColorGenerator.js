// Générer une palette de couleurs uniques
function generateColors(count) {
    const colors = [];
    const step = Math.floor(16777215 / count); // Intervalle dans l'espace des couleurs HEX
    for (let i = 0; i < count; i++) {
        const color = `#${(step * i).toString(16).padStart(6, '0')}`; // Convertir en HEX
        colors.push(color);
    }
    return colors;
}

// Exemple d'utilisation
const elements = Array.from({ length: 60 }, (_, i) => ({ id: i + 1 })); // Simuler les 60 éléments
const colors = generateColors(elements.length);

// Assigner une couleur unique à chaque élément
const elementsWithColors = elements.map((el, index) => ({
    ...el,
    color: colors[index],
}));

console.log(elementsWithColors);
