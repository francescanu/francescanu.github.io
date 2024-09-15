document.addEventListener("DOMContentLoaded", () => {
const articles = document.querySelectorAll('article');

articles.forEach(article => {
    const recipeImage = article.querySelector('.recipe-image');

    // Show image on mouseover
    article.addEventListener('mouseover', function() {
        recipeImage.style.display = 'block';
    });

    // Hide image on mouseout
    article.addEventListener('mouseout', function() {
        recipeImage.style.display = 'none';
    });
});
})