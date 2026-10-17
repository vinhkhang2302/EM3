// Fetch the recipe list from the API and show one card per recipe
async function fetchRecipesData() {
    try {
        const response = await fetch('https://dummyjson.com/recipes');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const recipeData = data.recipes; // the API wraps the list in a "recipes" field
        const recipeContainer = document.getElementById("recipe-container");

        // Create one card for each recipe
        recipeData.forEach(({ id, name, instructions, ingredients }) => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <h2>${name}</h2>
                <p><strong>Ingredients:</strong>${ingredients.join(', ')}</p>
                <p>
            `;
            recipeContainer.appendChild(card);
        });
    } catch (error) {
        console.log('Error fetching food data:', error);
    }
}

fetchRecipesData();