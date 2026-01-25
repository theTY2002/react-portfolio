import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
//TODO: Possibly replace github icon
//Put images in public/projects
const projects = 
[
    {
        id: 1,
        title: "React Portfolio",
        description: "This portfolio that you're looking at right now!",
        img: "/projects/project1.png",
        tags: ["JavaScript", "React", "TailwindCSS"],
        hasDemo: false,
        demoURL: "#",
        githubURL: "https://github.com/theTY2002/react-portfolio"
    },
    {
        id: 2,
        title: "Minerunner",
        description: "A Movement-based Puzzle game made in Unity, class final project",
        img: "/projects/project2.png",
        tags: ["Unity", "C#", "Group Work"],
        hasDemo: true,
        demoURL: "https://csci-526.github.io/main-minerunner/Minerunner/Builds/MineRunner%20Final%202/",
        githubURL: "https://github.com/theTY2002/CSCI-526-minerunner"
    },
    {
        id: 3,
        title: "Mahjong AI Agent",
        description: "An artificial intelligence agent comprised of multiple neural networks to play a simulated game of Mahjong",
        img: "/projects/project3.png",
        tags: ["Python", "AI", "Machine Learning"],
        hasDemo: false,
        demoURL: "#",
        githubURL: "https://github.com/theTY2002/COGS-188-Final-Project"
    },
]

export const ProjectsSection = () =>
{
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured<span className="text-primary"> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>


                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    {project.hasDemo && (
                                    <a href={project.demoURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>)}
                                    <a href={project.githubURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <GithubIcon size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/theTY2002">
                    My GitHub! <ArrowRight size={16} />
                </a>
            </div>

        </div>
    </section>;
}