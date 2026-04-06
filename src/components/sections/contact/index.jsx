"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "./contact-form";
import { Check, Copy, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { SparklesCore } from "@/components/sparkles";

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

function ContactSection() {
  const { title, subtitle } = portfolioData.sectionHeadings.contact;
  const { infoTitle, infoText, socialLinks, copyEmail } = portfolioData.contact;
  const [copied, setCopied] = useState(false);
  const emailHref =
    socialLinks.find((link) => link.icon === "Mail")?.href || "";
  const emailAddress = emailHref.replace("mailto:", "");

  const handleCopyEmail = async () => {
    if (!emailAddress) return;

    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section-shell relative overflow-hidden">
      <SparklesCore
        background="transparent"
        minSize={0.55}
        maxSize={1.7}
        particleCount={40}
        className="absolute inset-0 opacity-45"
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="relative space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-100">
              {infoTitle}
            </h3>
            <p className="text-slate-300">{infoText}</p>

            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ui-icon-pill h-10 w-10 hover:border-[#9059fd]/70 hover:text-[#9059fd]"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-3 py-2 rounded-md border border-input bg-background hover:bg-slate-800/50"
            >
              <span className="text-sm text-foreground">{emailAddress}</span>
              {copied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4 text-slate-400" />
              )}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
