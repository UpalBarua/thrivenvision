"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

// type PricingPackage = {
//   _id: string;
//   name: string;
//   description: string;
//   price: "Free" | number;
//   keyPoints: string[];
//   isPopular: boolean;
// };

const pricingPackageFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(20, { message: "Name cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Name must only include alphanumeric characters.",
    }),
  description: z
    .string()
    .trim()
    .min(5, { message: "Description must be at least 5 characters." })
    .max(200, { message: "Description cannot exceed 200 characters." }),
  price: z.coerce
    .number()
    .nonnegative({ message: "Price must be a valid number." })
    .max(9999999, { message: "Vai eto price kn????" })
    .refine(
      (number) => {
        const decimal = number.toString().split(".")[1];
        return decimal ? decimal.length <= 2 : true;
      },
      { message: "Price cannot have more than 2 decimal places." },
    ),
  // keyPoints: z.array(z.string()),
  isPopular: z.boolean().default(false),
});

type PricingPackageForm = Omit<
  z.infer<typeof pricingPackageFormSchema>,
  "price"
> & { price: string };

export function PricingPackageForm() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<PricingPackageForm>({
    resolver: zodResolver(pricingPackageFormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "0",
    },
  });

  const onSubmit = (data) => {
    console.log("clicked");
    console.log(data);
  };

  return (
    <form
      className="pt-10"
      onSubmit={handleSubmit((data) => console.log(errors, data))}
    >
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            label="Package Name"
            placeholder="Enter package name"
            errorMessage={fieldState.error?.message || ""}
            isInvalid={fieldState.invalid}
            {...field}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <Textarea
            label="Short Description"
            placeholder="Enter a short description"
            errorMessage={fieldState.error?.message || ""}
            isInvalid={fieldState.invalid}
            {...field}
          />
        )}
      />
      <Controller
        name="price"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            type="number"
            min={0}
            label="Package Price"
            placeholder="Enter package price"
            errorMessage={fieldState.error?.message || ""}
            isInvalid={fieldState.invalid}
            {...field}
          />
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
