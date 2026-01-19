import { Briefcase, Code, Database, Download, Server, User, Workflow } from "lucide-react"

export const AboutSection = () =>
{
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Backend Software Developer & Final Year MS Computer Science Student at USC</h3>
                    <p className="text-muted-foreground">
                        Backend‑leaning developer and computer science student with a solid grounding in data structures, algorithms, and software design. Proficient in multiple programming languages and comfortable working across the stack when needed. Enjoys tackling difficult problems, delivering reliable solutions on time, and collaborating closely with others. Currently looking for opportunities that will challenge me intellectually and help me deepen my skills.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Contact Me
                        </a>

                        <a href="Resume.pdf" download="Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2">
                            <Download /> Download Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Server className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Backend Development</h4>
                                <p className="text-muted-foreground">
                                    Building and maintaining server-side applications, APIs, and services with a focus on reliability, scalability, and clean architecture.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Workflow className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> AI & Automation</h4>
                                <p className="text-muted-foreground">
                                    Building intelligent workflows, scripts, and automation tools to streamline processes and boost efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Database className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Data Processing</h4>
                                <p className="text-muted-foreground">
                                    Designing data pipelines, optimizing queries, and transforming raw data into actionable insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}