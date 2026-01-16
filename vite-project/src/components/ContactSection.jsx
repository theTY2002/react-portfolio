import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@lib/utils";
import { useState } from "react";

export const ContactSection = () => {
    const [status, setStatus] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        
        const formData = new FormData(e.target);
        try {
            await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            setStatus("success");
            e.target.reset();
        } catch {
            setStatus("error");
        }
    };
    
    return (
        <section id="contact" className="py-2 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
            

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Actively looking for jobs and opportunities. Feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 max-w-lg">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:example@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        example@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">
                                        +1 (123) 456-7890
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        LOCATION HERE
                                    </a>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="font-medium mb-4">Connect With Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a href="#" target="_blank">
                                        <Linkedin />
                                    </a>
                                    <a><Linkedin /></a>
                                    <a><Linkedin /></a>
                                    <a><Linkedin /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs max-w-lg">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="access_key" value="56b58971-12b5-46a9-a4d7-fb32615812ba" />
                            
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="FirstName LastName"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Email..."
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello..."
                                />
                            </div>
                            
                            <button 
                                type="submit" 
                                disabled={status === "sending"}
                                className={cn(
                                    "w-full bg-primary text-primary-foreground py-3 rounded-md font-medium disabled:opacity-50 flex items-center justify-center gap-2",
                                    "cosmic-button"
                                )}
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>

                        {status === "success" && (
                            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 text-green-700 rounded-lg text-center">
                                🎉 Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        
                        {status === "error" && (
                            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 text-red-700 rounded-lg text-center">
                                ❌ Something went wrong. Please try again.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
