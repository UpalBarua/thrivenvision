import { useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionHeading } from "@/components/ui/section-heading";
import { z } from "zod";
const contractUsFormSchema = z.object({
  comment: z
    .string()
    .trim()
    .min(5, { message: "Comment must be at least 5 characters." })
    .max(500, { message: "Comment cannot exceed 200 characters." }),
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(20, { message: "Name cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Name must only include alphanumeric characters.",
    }),
  number: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(20, { message: "Name cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Name must only include alphanumeric characters.",
    }),
  email: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(20, { message: "Name cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Name must only include alphanumeric characters.",
    }),
});
type TContractUsForm = z.infer<typeof contractUsFormSchema>;
const ContractUsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { control, handleSubmit, reset } = useForm<TContractUsForm>({
    resolver: zodResolver(contractUsFormSchema),
    defaultValues: {
      name: "",
      number: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = async ({
    name,
    number,
    email,
    comment,
  }: TContractUsForm) => {
    try {
      setIsSubmitting(true);

      const newContract = {
        comment,
        customer: {
          name,
          number,
          email,
        },
      };

      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <form
        className="mx-auto flex max-w-[40rem] flex-col gap-4 py-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-bold">Contact with us</h1>

        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              size="lg"
              labelPlacement="outside"
              label=" Name"
              placeholder="Enter your name"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              size="lg"
              labelPlacement="outside"
              label="email"
              placeholder="Enter your email"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
            />
          )}
        />
        <Controller
          name="number"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              size="lg"
              labelPlacement="outside"
              label="number"
              placeholder="Enter your number"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
            />
          )}
        />
        <Controller
          name="comment"
          control={control}
          render={({ field, fieldState }) => (
            <Textarea
              size="lg"
              minRows={6}
              labelPlacement="outside"
              label="comment"
              placeholder="Enter your comment"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
            />
          )}
        />

        <div className="flex items-center justify-start gap-x-2">
          <Button
            type="button"
            color="danger"
            onClick={() => {
              reset();
            }}
          >
            Clear
          </Button>
          <Button type="submit" color="primary" isLoading={isSubmitting}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContractUsForm;
