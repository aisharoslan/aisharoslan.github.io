// Projects data - easy to add new projects here
const projects = [
    {
        id: 'city-jail-db',
        title: 'City Jail Database App',
        description: 'UI/UX, SQL, Python Flask, HTML/CSS/JS',
        year: '2024',
        image: '../images/db/db1.png',
        link: '../databases/index.html',
        category: 'web-app'
    },
    {
        id: 'ignite-app',
        title: 'Ignite Mobile App',
        description: 'UI/UX, Figma, Adobe CC, Mobile Design',
        year: '2023',
        image: '../images/ignite/igniteui.png',
        link: '../ignite/index.html',
        category: 'mobile-app'
    },
    {
        id: 'groove-magazine',
        title: 'Groove Magazine',
        description: 'Adobe CC, Printed Design, Figma',
        year: '2023',
        image: '../images/groove/mag1.png',
        link: '../groove/index.html',
        category: 'print-design'
    }
    // {
    //     id: 'portfolio',
    //     title: 'Portfolio Website',
    //     description: 'HTML/CSS/JS, Responsive Design, UI/UX',
    //     year: '2024',
    //     image: '../images/projects/portfolio.png',
    //     link: '#',
    //     category: 'web-design'
    // },
    // {
    //     id: 'hackmit',
    //     title: 'HackMIT Project',
    //     description: 'Python, Machine Learning, Data Analysis',
    //     year: '2023',
    //     image: '../images/projects/hackmit.png',
    //     link: '#',
    //     category: 'hackathon'
    // },
    // {
    //     id: 'guitar-app',
    //     title: 'Guitar Learning App',
    //     description: 'React Native, Mobile Development, Music Tech',
    //     year: '2023',
    //     image: '../images/projects/guitar.png',
    //     link: '#',
    //     category: 'mobile-app'
    // },
    // {
    //     id: 'archmag',
    //     title: 'Architecture Magazine',
    //     description: 'Adobe CC, Editorial Design, Print Layout',
    //     year: '2023',
    //     image: '../images/projects/archmag.png',
    //     link: '#',
    //     category: 'print-design'
    // }
];

// Function to render projects
function renderProjects() {
    const layout = document.getElementById('layout');
    if (!layout) return;

    layout.innerHTML = '';

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-category', project.category);

        card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" loading="lazy" />
      <div class="mask">
        <h4 class="text-center">${project.title}</h4>
        <p class="text-center">${project.description}</p>
        <p class="text-center">${project.year}</p>
        <button class="btn learn-btn">
          <a href="${project.link}"> Learn More </a>
          <span class="material-symbols-outlined"> arrow_outward </span>
        </button>
      </div>
    `;

        layout.appendChild(card);
    });

    // Reinitialize GSAP animations for new cards
    initializeCardAnimations();
}

// Function to initialize GSAP animations for cards
function initializeCardAnimations() {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom center += 10%",
                scrub: true,
            },
        });

        tl.from(card, {
            duration: 0.5,
            y: 150,
            opacity: 0,
        });
    });
}

// Function to add a new project (for future use)
function addProject(projectData) {
    projects.push(projectData);
    renderProjects();
}

// Function to filter projects by category
function filterProjects(category) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects, addProject, filterProjects };
}
