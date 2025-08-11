import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "پروژه لندینگ فروشگاهی",
    Description: "مناسب سایت فروشگاهی حرفه ای  با طراحی زیبا و حرفه ای",
    image: "/projects/project1.png",
    tags: ["Html", "Css", "Wordpress"],
    demoUrl: "#",
    gitHubLink: "#",
  },
  {
    id: 2,
    title: "پروژه سایت شخصی و رزومه",
    Description: "مناسب سایت رزومه طراحان و برنامه نویسان با طراحی حرفه ای",
    image: "/projects/resume.png",
    tags: ["Html", "Css", "React", "Tailwind Css"],
    demoUrl: "#",
    gitHubLink: "https://github.com/Ewanweb/Resume-React",
  },
  {
    id: 3,
    title: "پروژه سایت پخش فیلم و سریال",
    Description: "مناسب سایت آموزشی و فیلم و سریال با قلب شیک و حرفه ای",
    image: "/projects/moplay.PNG",
    tags: ["Html", "Css", "React", "Asp.NetCore", "NodeJs", "Laravel"],
    demoUrl: "#",
    gitHubLink: "#",
  },
    {
    id: 3,
    title: "قالب اختصاصی ادمین فوق حرفه ای",
    Description: "مناسب سایت آموزشی و فیلم و سریال با قلب شیک و حرفه ای",
    image: "/projects/Admin.PNG",
    tags: ["Html", "Css", "React", "Asp.NetCore", "NodeJs", "Laravel"],
    demoUrl: "#",
    gitHubLink: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className={"py-24 px-4 relative"}>
      <div className={"container mx-auto max-w-5xl"}>
        <h2 className={"text-3xl md:text-4xl font-bold mb-4 text-center"}>
          {" "}
          جدید ترین <span className={"text-primary"}>پروژه ها</span>
        </h2>

        <p
          className={
            "text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          }
        >
          اینجا چندتا از پروژه‌هایی که تازگیا روشون کار کردم رو می‌تونی ببینی.
          همه‌شون رو با دقت و حوصله بالا طراحی کردم تا هم از نظر فنی خوب باشن،
          هم تجربه خوبی برای کاربر بسازن.
        </p>

        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={
                "group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              }
            >
              <div className={"h-48 overflow-hidden"}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={
                    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  }
                />
              </div>
              <div className={"p-6"}>
                <div className={"flex flex-wrap gap-2 mb-4"} dir="ltr">
                  {project.tags.map((tag, index) => (
                    <span key={index}
                      className={
                        "px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-shadow-current"
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.Description}
                </p>
                <div className="flex justify-between items-center" dir="ltr">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/Ewanweb" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
           <ArrowRight size={16}/> {" "} مشاهده گیتهاب  {" "} 
          </a>
        </div>
      </div>
    </section>
  );
};
