async function fetchRecipes() {
    try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        if (data && data.recipes) {
            createTable(data.recipes);
        } else {
            document.getElementById('recipe-container').textContent = 'No recipes found.';
        }

    } catch (error) {
        console.error('Error fetching recipes:', error);
        document.getElementById('recipe-container').textContent = 'Failed to load recipes. Please try again later.';
    }
}
function createTable(recipes) {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headers = ['Name', 'Cuisine', 'Difficulty', 'Rating', 'Prep Time', 'Cook Time'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    recipes.forEach(recipe => {
        const row = table.insertRow();
        row.insertCell().textContent = recipe.name;
        row.insertCell().textContent = recipe.cuisine;
        row.insertCell().textContent = recipe.difficulty;
        row.insertCell().textContent = recipe.rating;
        row.insertCell().textContent = `${recipe.prepTimeMinutes} mins`;
        row.insertCell().textContent = `${recipe.cookTimeMinutes} mins`;
    });
    document.getElementById('recipe-container').appendChild(table);
}
fetchRecipes();