const { useState } = React;

function ProjectsApp() {
    const [expandedId, setExpandedId] = useState(null);

    const projects = [
        {
            id: 1,
            title: "2D Game ",
            category: "C++",
            shortDescription: "A simple 2D game  built with C++ and sfml",
            thumbnail: "https://placehold.co/400x300/6e332f/antiquewhite?text=Game",
            fullDescription: `
                        This 2D action platformer was built from scratch to understand game development 
                        mechanics including real-time combat, sprite animation systems, and enemy AI behavior. 
                        The game features a player character with directional attacks (forward/backward), 
                        intelligent ghost enemies that chase and attack, and fluid animation state management. 
                        Built with SFML for multimedia handling, it demonstrates core concepts like collision 
                        detection, state machines for game entities, and health/damage systems.
                    `,
            images: [
                "assets/game1.png",
                "assets/game2.png"
            ],
            features: [
                "Player movement with running and jumping physics",
                "Dual-direction combat system (forward + backward attacks)",
                "Enemy AI with idle, chase, and attack states",
                "Sprite animation system with state-based frame management",
                "Hitbox detection for attack collision",
                "Health system with visual feedback (hit flash effects)",
                "Death animation system that completes before game over",
                "Parallax scrolling background",
                "Real-time enemy spawning and removal"
            ],
            technologies: [
                { name: "C++", purpose: "Core game logic and entity management" },
                { name: "SFML", purpose: "Graphics rendering, window management, and input handling" },
                { name: "SFML Audio", purpose: "Sound effects for combat and actions (planned)" }
            ],
            challenges: "Managing memory efficiently and preventing leaks was the biggest challenge. I learned to use smart pointers and implement proper resource management.",
            learned: "Low-level graphics programming, memory management, game loop architecture",
            tags: ["C++", "SFML", "2D Platformer", "Game Dev"],
            github: "https://github.com/mohamedaminroughi40-ctrl/game-dupp.git",
        },
        {
            id: 2,
            title: "Photographe Portfolio",
            category: "Web",
            shortDescription: "Personal portfolio showcasing my projects",
            thumbnail: "https://placehold.co/400x300/2c4a6e/antiquewhite?text=Portfolio",
            fullDescription: `
                        A  photography portfolio website built from scratch with vanilla HTML, CSS, 
                        and JavaScript to showcase a photographer's visual work. Features a responsive 
                        masonry-style gallery using pure CSS Grid, a custom-built lightbox modal for image 
                        viewing, and category filtering implemented with JavaScript DOM manipulation. 
                        The site emphasizes visual storytelling with full-width hero imagery, subtle CSS 
                        scroll animations, and a minimalist dark theme that puts photography first. 
                        Includes a contact form with client-side validation and localStorage for message 
                        persistence, all without any external libraries or frameworks.
                    `,
            images: [
                "assets/por1.png",
                "assets/por2.png"
            ],
            features: [
                "Responsive CSS Grid masonry-style gallery",
                "Vanilla JavaScript category filtering",
                "Pure CSS smooth scroll and fade-in animations",
                "Client-side contact form validation",
                "CSS-only hamburger mobile menu",
                "CSS custom properties for theming",
            ],
            technologies: [
                { name: "HTML", purpose: "Structure " },
                { name: "CSS", purpose: "styling" },
                { name: "js", purpose: "Animations and interactions" }
            ],
            challenges: `Building a responsive masonry-style gallery using only CSS Grid without external libraries required creative use of grid properties.
                         Implementing a custom lightbox with smooth transitions, and touch support for mobile devices using pure JavaScript was complex but rewarding.
                         Managing image filtering performance while avoiding layout shifts required careful DOM manipulation and CSS optimization.`,
            learned: `CSS Grid advanced techniques, custom modal/lightbox implementation from scratch, JavaScript DOM manipulation best practices,
                         Intersection Observer for performance, responsive design without frameworks,`,
            tags: ["HTML", "CSS", "javaScript"],
            github: "https://github.com/AhmedBenRami/Portfolio.git",
        }
    ];



    const toggleExpand = (id) => {
            setExpandedId(expandedId === id ? null : id);
        };

        return (
            <div className="projects-container">
                <div className="projects-list">
                    {projects.map(project => {
                        const isExpanded = expandedId === project.id;
                        return (
                            <div key={project.id} className="project-item">
                                {/* Clickable summary area */}
                                <div className="project-summary" onClick={() => toggleExpand(project.id)}>
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="project-thumbnail"
                                    />
                                    <div className="project-content">
                                        <h3>{project.title}</h3>
                                        <p>{project.shortDescription}</p>
                                        <div className="tags">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="links" onClick={(e) => e.stopPropagation()}>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                GitHub →
                                            </a>
                                        </div>
                                        <p> click for more information about the project</p>
                                    </div>
                                </div>
                                {isExpanded && (
                                    <div className="project-expanded">
                                        {/* TWO PICTURES side by side */}
                                        <div className="two-images">
                                            <img src={project.images[0]} alt={`${project.title} view 1`} />
                                            <img src={project.images[1]} alt={`${project.title} view 2`} />
                                        </div>

                                        <div className="section">
                                            <h3> About This Project</h3>
                                            <p>{project.fullDescription}</p>
                                        </div>

                                        <div className="section">
                                            <h3> Key Features</h3>
                                            <ul>
                                                {project.features.map((feature, idx) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="section">
                                            <h3> Technologies Used</h3>
                                            <div className="tech-list">
                                                {project.technologies.map((tech, idx) => (
                                                    <div key={idx} className="tech-item">
                                                        <strong>{tech.name}</strong> - {tech.purpose}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="section">
                                            <h3> Challenges & Learning</h3>
                                            <p><strong>Challenges:</strong> {project.challenges}</p>
                                            <p><strong>What I Learned:</strong> {project.learned}</p>
                                        </div>

                                        <div className="modal-actions">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                                View on GitHub
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    ReactDOM.render(<ProjectsApp />, document.getElementById('react-root'));