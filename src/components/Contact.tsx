import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/bosspetite",
      color: "hover:text-gray-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/basseyobeys15213",
      color: "hover:text-blue-300"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:basseyobeys@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-portfolio p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="btn-primary w-full"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card-portfolio p-8">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">basseyobeys@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">WhatsApp</h4>
                      <p className="text-muted-foreground">08112075017</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-portfolio p-8">
                <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-secondary/50 rounded-lg border border-border/50 transition-all duration-300 hover:bg-secondary hover:scale-105 ${social.color} flex items-center space-x-3`}
                    >
                      <social.icon size={20} />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="card-portfolio p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Available for Projects</h3>
                <p className="text-muted-foreground mb-6">
                  I'm currently available for freelance work and exciting new opportunities.
                </p>
                <div className="inline-flex items-center space-x-2 text-primary">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;