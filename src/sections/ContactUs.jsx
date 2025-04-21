import React, { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Loader2, CheckCircleIcon, AlertTriangle } from "lucide-react";
import { GridSection } from "@/components/GridSection";
const ContactUsSection = forwardRef((props, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await emailjs.send(
        "service_IOLOKIS",
        "template_k6wa3zc",
        {
          fullName: data.fullName,
          email: data.email,
          message: data.message,
        },
        "Ag_6qjGfj_TsTMOpS"
      );

      console.log("Email sent successfully!", response.status, response.text);
      toast({
        title: "Email sent successfully!",
        description: "We will be contacting you soon.",
        variant: "success",
        icon: <CheckCircleIcon className="w-4 h-4" />,
      });
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error",
        description: "Failed to send email. Please try again.",
        variant: "destructive",
        icon: <AlertTriangle className="w-4 h-4" />,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center w-screen box-border overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: false, margin: "100px" }}
    >
      <GridSection
        children={
          <div className="flex flex-col items-center justify-center w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-md px-8 py-6 border border-white/60 rounded-lg shadow-[0_0_70px_4px_rgba(50,178,162,0.18)] bg-black z-10"

            >
              <h2 className="text-xl font-bold mb-4 w-full text-center sm:text-lg">
                Contact us
              </h2>

              <div className="mb-4 w-full">
                <label
                  htmlFor="fullName"
                  className="block text-base mb-2 sm:text-sm"
                >
                  Full Name*
                </label>
                <Input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full bg-black"
                  disabled={isLoading}
                  {...register("fullName", {
                    required: "You need to enter your full name",
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message:
                        "Full name should only contain letters and spaces",
                    },
                  })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="mb-4 w-full">
                <label
                  htmlFor="email"
                  className="block text-base mb-2 sm:text-sm"
                >
                  Email*
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-black"
                  disabled={isLoading}
                  {...register("email", {
                    required: "You need to enter your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-6 w-full">
                <label
                  htmlFor="message"
                  className="block text-base mb-2 sm:text-sm"
                >
                  Message*
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  rows="5"
                  className="w-full bg-black"
                  disabled={isLoading}
                  {...register("message", {
                    required: "You need to enter a message to be sent",
                  })}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full max-w-[11rem] h-12 text-base font-medium rounded-lg border-2 transition-opacity duration-500 flex items-center justify-center gap-2 outline-none ${
                    isLoading
                      ? "bg-[#2a968a] cursor-not-allowed opacity-80"
                      : "bg-[#32b2a2] cursor-pointer hover:opacity-60"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-6 w-6 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>

            </form>
          </div>
        }
      />
    </motion.div>
  );
});

export default ContactUsSection;
