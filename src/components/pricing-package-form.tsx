"use client";

import { addNewPricingPackageToDB } from "@/lib/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const keyPointSchema = z
  .literal("")
  .or(
    z
      .string()
      .trim()
      .min(5, { message: "Point must be at least 3 characters." })
      .max(100, { message: "Point must be at least 3 characters." }),
  );

const pricingPackageFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(50, { message: "Name cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Name must only include alphanumeric characters.",
    }),
  description: z
    .string()
    .trim()
    .min(5, { message: "Description must be at least 5 characters." })
    .max(300, { message: "Description cannot exceed 200 characters." }),
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
  keyPoint1: keyPointSchema,
  keyPoint2: keyPointSchema,
  keyPoint3: keyPointSchema,
  keyPoint4: keyPointSchema,
  keyPoint5: keyPointSchema,
  isPopular: z.boolean().default(false),
});

type KeyPoint =
  | "keyPoint1"
  | "keyPoint2"
  | "keyPoint3"
  | "keyPoint4"
  | "keyPoint5";

type PricingPackageForm = Omit<
  z.infer<typeof pricingPackageFormSchema>,
  "price"
> & { price: string };

export function PricingPackageForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [keyPointsCount, setKeyPointsCount] = useState([null, null]);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<PricingPackageForm>({
    resolver: zodResolver(pricingPackageFormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "0.0",
      keyPoint1: "",
      keyPoint2: "",
      keyPoint3: "",
      keyPoint4: "",
      keyPoint5: "",
    },
  });

  const onSubmit = async ({
    name,
    description,
    price,
    isPopular,
    ...keyPoints
  }: PricingPackageForm) => {
    try {
      setIsSubmitting(true);

      const newPricingPackage = {
        name,
        description,
        price: Number(price),
        isPopular,
        keyPoints: Object.keys(keyPoints)
          .map((key) => keyPoints[key as keyof typeof keyPoints])
          .filter((point) => (point as string).length > 0),
      };

      await addNewPricingPackageToDB(newPricingPackage);
      console.log("new pricing package added");
      setKeyPointsCount([null, null]);
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
      <h2 className="pb-8 text-center text-2xl font-bold tracking-tight">
        Add New Price Package
      </h2>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            size="lg"
            labelPlacement="outside"
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
            size="lg"
            minRows={6}
            labelPlacement="outside"
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
            className="appearance-none"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-small text-default-400">$</span>
              </div>
            }
            size="lg"
            labelPlacement="outside"
            type="number"
            step="any"
            min={0}
            label="Package Price"
            placeholder="Enter package price"
            errorMessage={fieldState.error?.message || ""}
            isInvalid={fieldState.invalid}
            {...field}
          />
        )}
      />
      <div>
        <div className="flex items-center justify-between">
          <h3>Package Key Points</h3>
          <Button
            isIconOnly
            color="primary"
            onClick={() => {
              if (keyPointsCount.length < 5) {
                setKeyPointsCount((prevKeyPointsCount) => [
                  ...prevKeyPointsCount,
                  null,
                ]);
              }
            }}
          >
            <Plus />
          </Button>
        </div>
      </div>
      <div className="space-y-3">
        {keyPointsCount.map((_, i) => (
          <div key={i} className="flex items-start gap-x-4">
            <Controller
              name={`keyPoint${i + 1}` as KeyPoint}
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  size="lg"
                  labelPlacement="outside"
                  placeholder="Enter key point"
                  errorMessage={fieldState.error?.message || ""}
                  isInvalid={fieldState.invalid}
                  {...field}
                />
              )}
            />
            <Button
              isIconOnly
              onClick={() => {
                if (keyPointsCount.length > 1) {
                  setKeyPointsCount((prevKeyPoints) =>
                    prevKeyPoints.filter((_, n) => i !== n),
                  );
                  setValue(`keyPoint${i + 1}` as KeyPoint, "");
                  console.log("clear");
                }
              }}
            >
              <X />
            </Button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-x-2">
        <Button
          type="button"
          color="danger"
          onClick={() => {
            setKeyPointsCount([null, null]);
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
