import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast} from "./../hooks/use-toast"
import { useState } from "react";

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(()=>{
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon."
            })
            setIsSubmitting(false)
        }, 1500)
    }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Get In <span className="text-primary">Touch</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        You can contact me here!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-11" onSubmit={handleSubmit}>
        <div className="space-y-8 ">
          <h3 className="text-2xl font-semibold mb-6">
            My Contact Informations
          </h3>

          <div className="space-y-6 justify-center ">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-start underline"> Email</h4>
                <a
                  href="mailto:nounthanith99@gmail.com
"
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline cursor-pointer"
                >
                  nounthanith99@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-start underline">
                  {" "}
                  Phone Number
                </h4>
                <a
                  href="tel:+885 939 392 90
"
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline cursor-pointer"
                >
                  +855 939 392 90
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-start underline"> Location</h4>
                <a
                  href="https://www.google.com.kh/maps/dir/Kdol+Daun+Teav/%E1%9E%80%E1%9F%92%E1%9E%8A%E1%9E%BB%E1%9E%9B%E1%9E%8A%E1%9E%BC%E1%9E%93%E1%9E%91%E1%9E%B6%E1%9E%9C/@13.145296,103.1448605,12.65z/data=!4m13!4m12!1m5!1m1!1s0x31054a66132e07c1:0x8f1a6643b42d953e!2m2!1d103.2031241!2d13.1400053!1m5!1m1!1s0x31054a66132e07c1:0x8f1a6643b42d953e!2m2!1d103.2031241!2d13.1400053?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D
"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline cursor-pointer"
                >
                  Battambang, Kdol Doun Teav
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4 underline"> My Social life</h4>
            <div className="flex space-x-4 justify-center">
              <a target="_blank" href="https://web.facebook.com/tha.nith.549">
                <Facebook />
              </a>
              <a target="_blank" href="https://www.instagram.com/tonq_tong/">
                <Instagram />
              </a>
              <a target="_blank" href="https://t.me/Nuon_Thanith">
                <Phone />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Nuon Thanith..."
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="haha@gmail.com"
              />
            </div>
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your message here."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16}/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
