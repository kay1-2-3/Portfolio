import {Mail, Phone, MapPin, Send, CheckCircle, AlertCircle} from "lucide-react";
import {Button} from "@/components/Button"
import {useState} from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "kunalkumar787@gmail.com",
        href: "mailto:kunalkumar787@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (310) 218-3210",
        href: "tel:+13102183210",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Torrance, CA",
        href: "#",
    },
];




export const Contact = () => {
    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({
            type: null,
            message: "",
        });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            
            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration is missing");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                { publicKey }
            );

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully!",
            });
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus({
                type: "error",
                message: "Failed to send message. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/*Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Let's build {" "}
                        <span className="font-serif italic font-normal text-white">
                            something great.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-100">
                        Have a project in mind? I'd love to hear about it. Send me a message
                        and let's discuss how we can work together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input 
                                    id="name" 
                                    type="text"
                                    required
                                    placeholder="Your name..."
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus;ring-1 focus:ring-primary outline-none"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input 
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus;ring-1 focus:ring-primary outline-none" 
                                    required
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label htmlFor="Message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus;ring-1 focus:ring-primary outline-none resize-none"
                                rows={5}
                                required
                                placeholder="Your message..."
                                value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                            />
                            </div>

                            <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                                {isLoading ? "Sending..." : (<>Send Message <Send className="w-5 h-5" /></>)}
                            </Button>

                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-500" : "bg-red-500/10 border border-red-500/20 text-red-500"}`}
                                >
                                    
                                    {submitStatus.type === "success" ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 " />}
                                    
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
