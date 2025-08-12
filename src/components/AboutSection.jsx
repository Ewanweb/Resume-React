import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          درباره <span className="text-primary">من</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              ماهان محمودی، برنامه‌نویس بک‌اند
            </h3>
            <p className="text-muted-foreground">
              مسلط به C#، PHP، JavaScript، SQL Server، MongoDB و توسعه APIهای
              RESTful. آشنا با SOLID، CQRS، Git، Docker، React و WordPress.
              علاقه‌مند به کار تیمی و یادگیری مداوم.
            </p>
            <p className="font-vazir">آشنا با CI/CD و توسعه با React.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                تماس بگیرید
              </a>
              <a
                href="/MahanMahmoudi_Fa.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                دانلود رزومه
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-right">
                  <h4 className="font-semibold text-lg">توسعه دهنده وبسایت</h4>
                  <p className="text-muted-foreground">
                    ایجاد سایت های ریسپانسیو و کاربر پسند و سئو شده با جدید ترین
                    تکنولوژی ها
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-right">
                  <h4 className="font-semibold text-lg">وردپرس</h4>
                  <p className="text-muted-foreground">
                    توانایی طراحی سایت پیشرفته با وردپرس و سئو قوی برای فروشگاه
                    ها و سایر کسب و کار ها
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-right">
                  <h4 className="font-semibold text-lg">پشتیبان سایت</h4>
                  <p className="text-muted-foreground">
                    پشتیبانی کامل سایت شما شامل بروزرسانی مطالب باز طراحی سئو
                    اضافه کردن ویژگی جدید
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
