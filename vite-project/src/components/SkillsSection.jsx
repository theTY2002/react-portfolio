import { useState } from "react";
import { cn } from "@lib/utils";

const skills =
[
    {name: "Python", level: 100, category: "languages"},
    {name: "Java", level: 100, category: "languages"},
    {name: "Swift", level: 66, category: "languages"},
    {name: "C#", level: 66, category: "languages"},
    {name: "C/C++", level: 33, category: "languages"},
    {name: "JavaScript", level: 33, category: "languages"},

    {name: "REST APIs", level: 66, category: "backend"},
    {name: "PostgreSQL", level: 66, category: "backend"},
    {name: "Docker", level: 33, category: "backend"},

    {name: "Automation Scripts", level: 100, category: "aI/automation"},
    {name: "Web Scraping", level: 100, category: "aI/automation"},
    {name: "Agentic LLM Tools", level: 100, category: "aI/automation"},
    {name: "n8n (Workflow automation)", level: 100, category: "aI/automation"},
    {name: "LLM APIs", level: 66, category: "aI/automation"},
];

const categories = ["all", "languages", "backend", "aI/automation"];

export const SkillsSection = () =>
{
    const [currCategory, setCurrCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => currCategory === "all" || skill.category === currCategory)
    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) =>
                (
                    <button
                        key={key}
                        onClick={() => setCurrCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            currCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                    >{category}</button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>
                        </div>
                        
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5_ease-out"
                                style={{width: skill.level + "%"}}
                            />
                        </div>
                        <div className="text-left mt-1">
                            <span className="text-sm text-muted-foreground">
                                {skill.level <= 33 ? "Beginner" : 
                                skill.level <= 66 ? "Intermediate" : "Advanced"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>);
}