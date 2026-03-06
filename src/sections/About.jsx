import {Code2, Rocket, Users, Lightbulb} from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
        "Writing maintainable, scalable code that is robust and simple.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
        "Optimizing for speed and emphasizing efficiency and simplicity.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with others to achieve common goals.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Always striving to improve and learn new technologies.",
    },
];


export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/*Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the future,{" "}
                        <span className="font-serif italic font-normal text-white">
                            one component at a time.
                        </span>
                    </h2>

                    <div className="space-y-4 text-muted-foregrounded animate-fade-in animation-delay-200">
                        <p>
                            I'm an aspiring software engineer who wants to learn as much as possible about the world of software and various technologies.
                            My journey to and within computer science started unorthodoxically; I had very little exposure to the field before starting college,
                            and my path was paved by a series of unexpected events and opportunities.
                            {/* I'm a passionate software engineer with 0 years of experience crafting digital products that make a difference.
                            My journey started with a curiosity for how things work on the web, and it has evolved into a deep expertise in modern
                            frontend technologies.*/}
                        </p>
                        <p>
                            I have yet to consider myself "experienced" in the field of software, however, I have a strong desire to learn more and to continue
                            growing. Curiosity and passion to improve are my driving forces; I aim to be as competent as possible in whatever I do.
                            {/* I specialize in React, Next.js and TypeScript, building everything from sleek landing pages to complex enterprise applications.*/}
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new technologies or doing hackathons.
                        </p>
                        <p>
                            
                        </p>
                        
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to create digital experiences that are not just functional, but truly delightful - products that users love
                            to use and developers love to maintain."
                        </p>
                    </div>
                </div>
                {/*Right Column - Highlights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                        style={{animationDelay: `${(idx + 1) * 100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};






