// Skills data - easy to add new skills here
const skills = [
    {
        id: 'cplusplus',
        name: 'C++',
        image: '../images/skills/c++.png',
        category: 'programming',
        proficiency: 'advanced'
    },
    {
        id: 'html',
        name: 'HTML',
        image: '../images/skills/html.png',
        category: 'web',
        proficiency: 'advanced'
    },
    {
        id: 'css',
        name: 'CSS',
        image: '../images/skills/css.png',
        category: 'web',
        proficiency: 'advanced'
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        image: '../images/skills/javascript.png',
        category: 'web',
        proficiency: 'intermediate'
    },
    {
        id: 'python',
        name: 'Python',
        image: '../images/skills/python.png',
        category: 'programming',
        proficiency: 'intermediate'
    },
    {
        id: 'github',
        name: 'GitHub',
        image: '../images/skills/github.png',
        category: 'tools',
        proficiency: 'intermediate'
    },
    {
        id: 'adobe_cc',
        name: 'Adobe CC',
        image: '../images/skills/adobe_cc.png',
        category: 'design',
        proficiency: 'advanced'
    },
    {
        id: 'figma',
        name: 'Figma',
        image: '../images/skills/figma.png',
        category: 'design',
        proficiency: 'advanced'
    },
    {
        id: 'sql',
        name: 'SQL',
        image: '../images/skills/sql.png',
        category: 'database',
        proficiency: 'intermediate'
    }
];

// Expertise/roles data
const expertise = [
    {
        id: 'programmer',
        name: 'Programmer',
        image: '../images/skills/programmer.png',
        description: 'Full-stack development with modern technologies'
    },
    {
        id: 'engineer',
        name: 'Engineer',
        image: '../images/skills/engineer.png',
        description: 'Problem-solving and system design'
    },
    {
        id: 'designer',
        name: 'Designer',
        image: '../images/skills/designer.png',
        description: 'UI/UX and visual design'
    },
    {
        id: 'photographer',
        name: 'Photographer',
        image: '../images/skills/photographer.png',
        description: 'Creative visual storytelling'
    },
    {
        id: 'learner',
        name: 'Learner',
        image: '../images/skills/learner.png',
        description: 'Always expanding knowledge and skills'
    },
    {
        id: 'leader',
        name: 'Leader',
        image: '../images/skills/leader.png',
        description: 'Team collaboration and project management'
    }
];

// Function to render skills
function renderSkills() {
    const skillsContainer = document.querySelector('.skills');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = '';

    skills.forEach((skill) => {
        const skillDiv = document.createElement('div');
        skillDiv.id = skill.id;
        skillDiv.className = 'skill-item';
        skillDiv.setAttribute('data-category', skill.category);
        skillDiv.setAttribute('data-proficiency', skill.proficiency);

        skillDiv.innerHTML = `
      <img src="${skill.image}" alt="${skill.name}" loading="lazy" />
      <div class="skill-overlay">
        <h4>${skill.name}</h4>
        <p>${skill.proficiency}</p>
      </div>
    `;

        skillsContainer.appendChild(skillDiv);
    });
}

// Function to render expertise
function renderExpertise() {
    const expertiseContainer = document.querySelector('.expertise');
    if (!expertiseContainer) return;

    // Clear existing content but keep the row structure
    const rows = expertiseContainer.querySelectorAll('.row');
    rows.forEach(row => {
        row.innerHTML = '';
    });

    // Add expertise items to rows
    expertise.forEach((item, index) => {
        const rowIndex = Math.floor(index / 2);
        const colClass = index % 2 === 0 ? 'col-6' : 'col-6';

        if (rows[rowIndex]) {
            const colDiv = document.createElement('div');
            colDiv.className = `${colClass} ex`;

            colDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <div class="expertise-overlay">
          <h4>${item.name}</h4>
          <p>${item.description}</p>
        </div>
      `;

            rows[rowIndex].appendChild(colDiv);
        }
    });
}

// Function to add a new skill
function addSkill(skillData) {
    skills.push(skillData);
    renderSkills();
}

// Function to add new expertise
function addExpertise(expertiseData) {
    expertise.push(expertiseData);
    renderExpertise();
}

// Function to filter skills by category
function filterSkills(category) {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderExpertise();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { skills, expertise, addSkill, addExpertise, filterSkills };
}
