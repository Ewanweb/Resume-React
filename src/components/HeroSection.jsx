import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"

    >
      <div className="container max-w-4xl mx-auto text-center z-10" >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">سلام من</span>{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              ماهان
            </span>{" "}
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              هستم
            </span>{" "}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl max-auto opacity-0 animate-fade-in-delay-3">
            ماهان محمودی، برنامه‌نویس بک‌اند با تجربه در C#، PHP، JavaScript و
            React، مسلط به ASP.NET Core، Clean Architecture و Domain-Driven
            Design. علاقه‌مند به یادگیری تکنولوژی‌های نوین و توسعه پروژه‌های
            حرفه‌ای در سطح بین‌المللی.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              مشاهده کار های من
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">اسکرول کنید</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
