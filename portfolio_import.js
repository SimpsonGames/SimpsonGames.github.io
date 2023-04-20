fetch('portfolio.json')
  .then(response => response.json())
  .then(data => {
    // Use the data to populate your website

    const projectsContainer = document.querySelectorAll('.portfolio-grid');

    data.projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('portfolio-panel');
      projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
      `;
      projectsContainer.appendChild(projectElement);
    });
  });

