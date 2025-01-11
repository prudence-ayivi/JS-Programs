// Générer une couleur HEX aléatoire
function randomColor() {
    const colormath = Math.floor(Math.random() * 16777215)
    return `#${colormath.toString(16).padStart(6, '0')}`;
}

// Générer un ensemble de couleurs uniques
function generateUniqueColors(count) {
    const colors = new Set();
    while (colors.size < count) {
        colors.add(randomColor());
    }
    return Array.from(colors);
}

// Exemple d'utilisation
const elements = Array.from({ length: 60 }, (_, i) => ({ id: i + 1 })); // Simuler les 60 éléments
const colors = generateUniqueColors(elements.length);

// Assigner une couleur unique à chaque élément
const elementsWithColors = elements.map((el, index) => ({
    ...el,
    color: colors[index],
}));

console.log(elementsWithColors);
