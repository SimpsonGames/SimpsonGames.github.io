function loadComponent(path, targetElementID)
{
    fetch(path)
        .then(response => response.text())
        .then(html => {
            const element = document.getElementById(targetElementID);
            element.innerHTML = html;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent('header.html', 'header');
    loadComponent('footer.html', 'footer');
});