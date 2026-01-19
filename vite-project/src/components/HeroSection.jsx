import { ArrowBigDown, ArrowDown, ArrowDown10 } from "lucide-react"

export const HeroSection = () =>
{
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Trevor</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Yip</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
                        I'm a University of Southern California student pursuing a Master's Degree in Computer Science, I am enthusiastic and motivated in exploring career opportunities in Software Engineering and Data Science. Proficient in multiple programming languages, with a strong understanding of data structures, algorithms, and software design.I strive for perfection and perform each task to the best of my ability.Able to solve difficult problems, deliver timely results, and can collaborate and communicate cohesively with other people.Looking for opportunities and experiences that would help me cultivate and further hone my skills and challenge me intellectually.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowBigDown className="h-5 w-5 text-primary" />
            </div>
        </section>)
}