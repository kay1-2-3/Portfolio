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
                {/* Section header */}
                <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        About Me
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the future,{" "}
                        <span className="font-serif italic font-normal text-white">
                            one component at a time.
                        </span>
                    </h2>
                </div>

                {/* Glowing box sized to the paragraphs */}
                <div className="glass rounded-2xl p-8 md:p-10 glow-border animate-fade-in animation-delay-200 w-fit max-w-full mx-auto mb-16">
                    <div className="space-y-6 text-muted-foreground">
                        <p className="text-base md:text-lg leading-relaxed">
                            I'm an aspiring software engineer who wants to learn as much as possible about the world of software and various technologies.
                            My journey to and within computer science started unorthodoxically; I had very little exposure to the field before starting college,
                            and my path was paved by a series of unexpected events and opportunities.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed">
                            I have yet to consider myself "experienced" in the field of software, however, I have a strong desire to learn more and to continue
                            growing. Curiosity and passion to improve are my driving forces; I aim to be as competent as possible in whatever I do.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed">
                            When I'm not coding, you'll find me exploring new technologies or doing hackathons.
                        </p>
                    </div>
                </div>

                {/* Highlights */}
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






