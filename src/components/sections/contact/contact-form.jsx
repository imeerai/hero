"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, XCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

const { contactForm } = portfolioData;
const { fields } = contactForm;

const formSchema = z.object({
  name: z.string().min(2, contactForm.validation.nameMin),
  email: z.string().email(contactForm.validation.emailInvalid),
  message: z.string().min(5, contactForm.validation.messageMin),
});

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      console.log("Contact form draft submitted:", data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium">
          {fields.nameLabel}
        </label>
        <Input
          {...register("name")}
          placeholder={fields.namePlaceholder}
          className={errors.name ? "border-destructive" : ""}
          autoComplete="name"
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          {fields.emailLabel}
        </label>
        <Input
          type="email"
          {...register("email")}
          placeholder={fields.emailPlaceholder}
          className={errors.email ? "border-destructive" : ""}
          autoComplete="email"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          {fields.messageLabel}
        </label>
        <Textarea
          {...register("message")}
          placeholder={fields.messagePlaceholder}
          className={errors.message ? "border-destructive" : ""}
          rows={5}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          contactForm.buttonLabels.sending
        ) : submitStatus === "success" ? (
          <>
            {contactForm.buttonLabels.success}
            <CheckCircle className="ml-2 h-4 w-4 text-green-500" />
          </>
        ) : submitStatus === "error" ? (
          <>
            {contactForm.buttonLabels.error}
            <XCircle className="ml-2 h-4 w-4 text-red-500" />
          </>
        ) : (
          <>
            {contactForm.buttonLabels.idle}
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

export { ContactForm };
