window.addEventListener('load', () => 
{
    const projectList = document.getElementById('project-list');
    const group = projectList.getAttribute('project-data');
    fetchProjects(group);
});

function fetchProjects(group)
{
    fetch('portfolio_pages.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(project => project.title === group);
            const projectData = document.getElementById('project-data');
            projectData.innerHTML = '';

            filteredData.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.innerHTML = `
                    <h1>${project.title}</h1>
                    <p>${project.description}</p>
                    //And any other data blah blah blah
                `;
                projectData.appendChild(projectData);
            });
        })
        .catch(error => console.error(error));
}