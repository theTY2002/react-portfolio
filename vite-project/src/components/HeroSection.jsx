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
                        Put a short bio paragraph here
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius iaculis sagittis. Ut vel purus dignissim, venenatis orci in, vestibulum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla augue ipsum, porttitor sit amet ipsum ut, rutrum convallis orci. Vestibulum sed elit at justo fringilla fermentum non sit amet felis. In et vehicula velit, sit amet elementum erat. Duis et convallis lacus. In fringilla nec augue id interdum. Ut venenatis, ligula at commodo porta, elit lectus molestie eros, a facilisis eros lectus in augue. Duis facilisis, odio vel convallis luctus, arcu nibh tristique eros, ut iaculis justo augue et nisl. Duis porttitor sodales erat eu sodales. Vivamus vel rutrum mauris, ut dignissim turpis. Aenean eu magna in sem pretium bibendum sit amet et libero.
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