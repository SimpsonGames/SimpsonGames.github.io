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
    loadComponent('../components/header.html', 'header');
    loadComponent('../components/footer.html', 'footer');
});