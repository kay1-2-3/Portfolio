import {ArrowUpRight, Github } from "lucide-react";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton";

const projects = [
    {
        title: "AI Adoption Potential",
        description: "Tool to analyze which countries are adopting AI to better their economy",
        image: "/AI Adoption.jpg",
        tags: ["React", "JavaScript", "CSS", "Uvicorn", "FastAPI"],
        link: "https://github.com/kay1-2-3/Emerging-Countries",
        github: "https://github.com/kay1-2-3/Emerging-Countries",
    },
    {
        title: "AI Food Waste Reduction",
        description: "Interactive AI-powered web app that helps reduce food waste",
        image: "/AI Food Waste Reduction.jpg",
        tags: ["React", "TypeScript", "CSS", "Uvicorn", "FastAPI"],
        link: "https://github.com/kay1-2-3/AI-Food-Waste-Reduction",
        github: "https://github.com/kay1-2-3/AI-Food-Waste-Reduction",
    },
    {
        title: "WebCafe AI",
        description: "AI creator",
        image: "/webCafe AI.jpg",
        tags: ["React", "JavaScript", "Tailwind CSS"],
        link: "https://webcafelanding-a9b98.web.app/",
        github: "https://github.com/kay1-2-3/webcafeland",
    },
    {
        title: "Kicker",
        description: "Crowdfunding platform for startups",
        image: "/kicker2.jpg",
        tags: ["Ruby", "JavaScript", "HTML", "CSS", "API", "Sqlite3", "Rails"],
        link: "https://github.com/kay1-2-3/kicker",
        github: "https://github.com/kay1-2-3/kicker",
    },
    {
        title: "Gipet",
        description: "A social media platform for snippet app-posts, comments, votes and more",
        image: "/Gipet.jpg",
        tags: ["React", "TypeScript"],
        link: "https://github.com/kay1-2-3/Gipet",
        github: "https://github.com/kay1-2-3/Gipet",
    },
    {
        title: "Bita",
        description: "Full Stack Template for creating a frontend and backend for websites",
        image: "/bita.jpg",
        tags: ["React", "TypeScript", "Sqlite3", "AdonisJS"],
        link: "https://github.com/kay1-2-3/Bita",
        github: "https://github.com/kay1-2-3/Bita",
    },
];



export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/*Bg glows */}
            <div className="container mx-auto px-6 relative z-10">
                {/*Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that{" "}
                        <span className="font-serif italic font-normal text-white">
                            make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-100">
                        A selection of my recent work, from complex web applications to innovative tools.
                    </p>
                </div>

                {/*Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md;row-span-1"
                        style={{ animationDealy: `${(idx + 1) * 100}ms`}}
                        >
                            {/*Image*/}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1200 group-hover:scale-110"
                                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                                    decoding="async"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                                />
                                {/*Overlay Links*/}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transiton-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                         <ArrowUpRight className="w-5 h-5"/> 
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                         <Github className="w-5 h-5"/> 
                                    </a>
                                </div>
                            </div>

                            { /*Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transitions-color">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5
                                    text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx) => (
                                    <span 
                                    key={tagIdx}
                                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-200">
                                        {tag}
                                    </span>
                                ))}
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>

                {/*View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton href="https://github.com/kay1-2-3">
                        View All projects
                        <ArrowUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};
