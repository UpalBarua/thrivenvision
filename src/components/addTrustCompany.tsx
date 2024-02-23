"use client";

import { addNewPCompany } from "@/lib/services";
import { uploadFile } from "@/lib/upload-file";
import { Avatar, Button } from "@nextui-org/react";
import { Camera } from "lucide-react";
import { FormEvent, useState } from "react";

const AddTrustedCompany = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pictureFile, setPictureFile] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);

      const imgURL = await uploadFile(pictureFile);

      await addNewPCompany({
        imageUrl: imgURL,
      });

      console.log("done");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mb-24 mt-24 ">
      <h1 className="mb-8 text-center text-2xl font-bold ">
        Add You Trusted Company
      </h1>
      <form className="flex justify-center " onSubmit={handleSubmit}>
        <div>
          <div className="relative w-max">
            <input
              id="picture"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                setPictureFile(e.target.files ? e.target.files[0] : null)
              }
            />
            <label
              htmlFor="picture"
              className="rounded-inherit absolute inset-0 z-10 cursor-pointer 
          appearance-none bg-transparent"
            />
            <Avatar
              showFallback
              radius="lg"
              src={pictureFile ? URL.createObjectURL(pictureFile) : ""}
              fallback={<Camera className="h-8 w-8" />}
              className="h-20 w-20"
            />
          </div>
          <Button className="mt-4" color="danger" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddTrustedCompany;
