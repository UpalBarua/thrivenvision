"use client";

import { addNewPricingPackageToDB } from "@/lib/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { SectionHeading } from "@/components/ui/section-heading";
import { Image } from "lucide-react";

const testimonialFormSchema = z.object({
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
  handle: z
    .string()
    .trim()
    .min(3, { message: "Handle must be at least 3 characters." })
    .max(20, { message: "Handle cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9@ ]+$/, {
      message: "Handle must only include alphanumeric characters.",
    }),
  picture: z.instanceof(File),
});

type TestimonialForm = z.infer<typeof testimonialFormSchema>;

export function TestimonialForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, reset } = useForm<TestimonialForm>({
    resolver: zodResolver(testimonialFormSchema),
    defaultValues: {
      name: "",
      comment: "",
      handle: "",
      picture: new File([], ""),
    },
  });

  const onSubmit = async ({
    name,
    comment,
    handle,
    picture,
  }: TestimonialForm) => {
    try {
      setIsSubmitting(true);

      const newTestimonial = {
        comment,
        customer: {
          name,
          handle,
          picture,
        },
      };

      console.log(newTestimonial);

      // await addNewPricingPackageToDB(newPricingPackage);
      console.log("new testimonial added");
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="mx-auto flex max-w-[40rem] flex-col gap-8 py-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <SectionHeading>Add New Price Package</SectionHeading>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            size="lg"
            labelPlacement="outside"
            label="Customer Name"
            placeholder="Enter customer name"
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
            label="Customer comment"
            placeholder="Enter customer comment"
            errorMessage={fieldState.error?.message || ""}
            isInvalid={fieldState.invalid}
            {...field}
          />
        )}
      />
      <Controller
        name="handle"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-small text-default-400">@</span>
              </div>
            }
            size="lg"
            labelPlacement="outside"
            label="Customer handle"
            placeholder="Enter customer handle"
            errorMessage={fieldState.error?.message || ""}
            isInvalid={fieldState.invalid}
            {...field}
          />
        )}
      />
      {/* <Controller */}
      {/*   name="picture" */}
      {/*   control={control} */}
      {/*   render={({ field, fieldState }) => ( */}
      {/*     <Input */}
      {/*       startContent={ */}
      {/*         <div className="pointer-events-none flex items-center"> */}
      {/*           <Image /> */}
      {/*         </div> */}
      {/*       } */}
      {/*       accept="image/*" */}
      {/*       type="file" */}
      {/*       size="lg" */}
      {/*       labelPlacement="outside" */}
      {/*       label="Customer picture" */}
      {/*       placeholder="Enter customer picture" */}
      {/*       errorMessage={fieldState.error?.message || ""} */}
      {/*       isInvalid={fieldState.invalid} */}
      {/*       {...field} */}
      {/*       onChange={(e) => field.onChange(e.target.files?.[0])} */}
      {/*     /> */}
      {/*   )} */}
      {/* /> */}
      {/**/}
      <div className="flex items-center justify-end gap-x-2">
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
  );
}
