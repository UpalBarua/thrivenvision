"use client";

import { services } from "@/config/services";
import { Button } from "@nextui-org/react";
import { cn } from "@/lib/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Send, X } from "lucide-react";
import { addNewConsultation, getAllConsulations } from "@/lib/services";
import { TConsultation } from "@/types";
import { useEffect } from "react";

const serviceCategories = services.map(({ category }) => category);

const timeSlots = [
  "12:00 AM",
  "04:00 AM",
  "02:00 AM",
  "06:00 AM",
  "08:00 AM",
  "10:00 AM",
  "12:00 PM",
  "02:00 PM",
  "04:00 PM",
  "06:00 PM",
  "08:00 PM",
  "10:00 PM",
] as const;

const phoneNoRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const consultBookinFormSchema = z.object({
  fullName: z
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
  phoneNo: z
    .string()
    .regex(phoneNoRegex, { message: "Please provide a valid phone number." })
    .optional(),
  consultType: z.custom<string>((val) =>
    serviceCategories.includes(val as (typeof serviceCategories)[number]),
  ),
  preferedTimeSlot: z.custom<string>((val) =>
    timeSlots.includes(val as (typeof timeSlots)[number]),
  ),
});

type TConsultBookingForm = z.infer<typeof consultBookinFormSchema>;

export function ConsultantBookingForm() {
  const [preferedDate, setPreferedDate] = useState<Date>();
  const [disabledDates, setDisabledDates] = useState<Date[]>();

  useEffect(() => {
    const getDisabledDates = async () => {
      const consultations = await getAllConsulations();
      const bookedDates = consultations.map(
        ({ preferedDate }) => new Date(preferedDate),
      );
      console.log(bookedDates);
      setDisabledDates(bookedDates);
    };

    getDisabledDates();
  }, []);

  const { control, handleSubmit, reset } = useForm<TConsultBookingForm>({
    resolver: zodResolver(consultBookinFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      phoneNo: "",
      consultType: "",
      preferedTimeSlot: "",
    },
  });

  const onSubmit = async (formData: TConsultBookingForm) => {
    try {
      await addNewConsultation({
        ...formData,
        preferedDate: preferedDate?.toString()
      } as TConsultation);
      reset();
      console.log("new consultation added");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-4">
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              size="lg"
              label="Full Name"
              placeholder="Enter your name"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
              classNames={{
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
              label="Email Address"
              placeholder="Enter your email"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
              classNames={{
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
          name="phoneNo"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              size="lg"
              label="Phone Number"
              placeholder="Enter your phone number"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
              classNames={{
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
          name="consultType"
          control={control}
          render={({ field, fieldState }) => (
            <Select
              size="lg"
              label="Consultation Type"
              placeholder="Select your consulation type"
              errorMessage={fieldState.error?.message || ""}
              isInvalid={fieldState.invalid}
              {...field}
              classNames={{
                trigger: [
                  "bg-background",
                  "data-[hover=true]:bg-background/40",
                  "group-data-[focus=true]:bg-background/40",
                  "border border-foreground/20",
                ],
              }}
            >
              {serviceCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </Select>
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
              className="text-base"
              classNames={{
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
      </div>
      <div className="space-y-6">
        <div
          className="max-w-max rounded-2xl border border-foreground/20 
        bg-background data-[hover=true]:bg-background/40 group-data-[focus=true]:bg-background/40"
        >
          <DayPicker
            mode="single"
            selected={preferedDate}
            onSelect={setPreferedDate}
            disabled={disabledDates}
          />
        </div>
        <div>
          <Controller
            name="preferedTimeSlot"
            control={control}
            render={({ field, fieldState }) => (
              <RadioGroup
                label="Pick a Timeslot (GMT)"
                errorMessage={fieldState.error?.message || ""}
                isInvalid={fieldState.invalid}
                {...field}
              >
                <div className="grid gap-4 grid-cols-3">
                  {timeSlots.map((slot) => (
                    <Radio
                      key={slot}
                      value={slot}
                      classNames={{
                        base: cn(
                          "inline-flex !min-w-full m-0 bg-background hover:bg-background/40 items-center justify-between",
                          "flex-row-reverse cursor-pointer rounded-lg gap-4 p-3 border border-foreground/10",
                          "data-[selected=true]:border-primary",
                        ),
                      }}
                    >
                      {slot}
                    </Radio>
                  ))}
                </div>
              </RadioGroup>
            )}
          />
        </div>
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
            // isLoading={isSubmitting}
            className="gradient-btn"
          >
            <span>Submit</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
