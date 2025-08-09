import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  //Frontend
  { name: "HTML/CSS", level: 95, Category: "فرانت" },
  { name: "Tailwind", level: 80, Category: "فرانت" },
  { name: "JavaScript", level: 90, Category: "فرانت" },
  { name: "TypeScript", level: 85, Category: "فرانت" },
  { name: "React", level: 90, Category: "فرانت" },
  { name: "NextJs", level: 70, Category: "فرانت" },

  //Backend
  { name: "C#", level: 80, Category: "بک اند" },
  { name: "php", level: 80, Category: "بک اند" },
  { name: "Asp.Net Core", level: 85, Category: "بک اند" },
  { name: "laravel", level: 70, Category: "بک اند" },
  { name: "NodeJs", level: 30, Category: "بک اند" },
  { name: "Express", level: 30, Category: "بک اند" },
  { name: "Mysql", level: 90, Category: "بک اند" },
  { name: "SqlServer", level: 90, Category: "بک اند" },
  { name: "MongoDb", level: 70, Category: "بک اند" },
  { name: "RestFull Api", level: 85, Category: "بک اند" },

  //Tools
  { name: "Git/github", level: 80, Category: "ابزار ها" },
  { name: "Docker", level: 60, Category: "ابزار ها" },
  { name: "Canva", level: 80, Category: "ابزار ها" },
  { name: "IDE", level: 95, Category: "ابزار ها" },
];

const categories = ["همه", "فرانت", "بک اند", "ابزار ها"];

export const SkillsSection = () => {
  const [activateCategory, setActiveCategory] = useState("همه");

  const filteredSkills = skills.filter(
    (skill) => activateCategory === "همه" || skill.Category === activateCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">مهارت</span> های من
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activateCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir="ltr">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
