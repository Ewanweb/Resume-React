import {
    GithubIcon,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  TableCellsMerge,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useForm, ValidationError } from "@formspree/react";

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("movlyvbp");

  if (state.succeeded) {
    return (
      <p className="text-center text-green-600 text-lg font-semibold">
        پیام با موفقیت ارسال شد، ممنونم!
      </p>
    );
  }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
           <span className="text-primary"> ارتباط</span> با من
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          اگه یه پروژه‌ی خفن تو ذهنت داری یا دوست داری باهام همکاری کنی، حتماً
          یه پیغام بده. همیشه مشتاقم درباره‌ی کارای جدید گپ بزنم :)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" >
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              مشخصات تماس
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> ایمیل</h4>
                  <a
                    href="mailto:mahan001ms@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mahan001ms@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> تلفن</h4>
                  <a
                    href="tel:+989157817553"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    dir="rtl"
                  >
                    989157817553+
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> لوکیشن</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Mashhad, Kh Razavi, Iran
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> ارتباط با من</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://wa.me/989157817553" target="_blank">
                  <MessageCircle />
                </a>
                <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="mahan-mahmoudi-4a58a2278" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ir.linkedin.com/in/mahan-mahmoudi-4a58a2278?trk=profile-badge">mahan Mahmoudi</a></div>
              
                <a href="https://t.me/cukablyt" target="_blank">
                  <Send />
                </a>
                <a href="https://instagram.com/awsm.deve" target="_blank">
                  <Instagram />
                </a>
                <a href="https://github.com/Ewanweb" target="_blank">
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>

      <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">ارسال پیام</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="ماهان محمودی ..."
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div dir="ltr">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  تلفن شما
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="0915......."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  ایمیل شما
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  پیام شما
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="سلام من ماهان محمودی هست..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {state.submitting ? "در حال ارسال ..." : "ارسال پیام"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
