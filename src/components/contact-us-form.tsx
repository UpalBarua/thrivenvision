"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Send, X } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const contactUsFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(20, { message: "Name cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Name must only include alphanumeric characters.",
    }),
  email: z.string().trim().email(),
  message: z
    .string()
    .trim()
    .min(5, { message: "Message must be at least 5 characters." })
    .max(800, { message: "Message cannot exceed 800 characters." }),
});

type TContactUsForm = z.infer<typeof contactUsFormSchema>;

export function ContactUsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, reset } = useForm<TContactUsForm>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async ({ name, email }: TContactUsForm) => {
    try {
      setIsSubmitting(true);

      const newMessage = {
        name,
        email,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        newMessage,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string,
      );

      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              size="lg"
              label="Name"
              placeholder="Enter your name"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
              classNames={{
                label: "text-base font-semibold",
                inputWrapper: [
                  "bg-background",
                  "data-[hover=true]:bg-background/40",
                  "group-data-[focus=true]:bg-background/40",
                  "border border-foreground/20",
                ],
              }}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              size="lg"
              label="Email"
              placeholder="Enter your email"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
              classNames={{
                label: "text-base font-semibold",
                inputWrapper: [
                  "bg-background",
                  "data-[hover=true]:bg-background/40",
                  "group-data-[focus=true]:bg-background/40",
                  "border border-foreground/20",
                ],
              }}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field, fieldState }) => (
            <Textarea
              size="lg"
              minRows={8}
              label="Message"
              placeholder="Enter your message"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
              classNames={{
                label: "text-base font-semibold",
                inputWrapper: [
                  "bg-background",
                  "data-[hover=true]:bg-background/40",
                  "group-data-[focus=true]:bg-background/40",
                  "border border-foreground/20",
                ],
              }}
            />
          )}
        />
        <div className="flex items-center justify-end gap-x-2 pt-2">
          <Button
            type="button"
            variant="solid"
            startContent={<X size={16} />}
            onClick={() => {
              reset();
            }}
            className="bg-gray-800"
          >
            <span>Clear</span>
          </Button>
          <Button
            startContent={<Send size={16} />}
            type="submit"
            color="primary"
            isLoading={isSubmitting}
            className="gradient-btn"
          >
            <span>Submit</span>
          </Button>
        </div>
      </form>
    </section>
  );
}
