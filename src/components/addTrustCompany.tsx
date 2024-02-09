"use client";
import { addNewPicture } from "@/lib/services";
import { uploadFile } from "@/lib/uploadFile";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const AddTrustedCompany = () => {
  const [image, setImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = async (e) => {
    const file = e?.target?.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imgURL = await uploadFile(image);
      console.log(imgURL);

      await addNewPicture({
        imageUrl: imgURL,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }

    setImage("");
  };

  return (
    <section className="mb-24 mt-24 ">
      <h1 className="mb-8 text-center text-2xl font-bold ">
        Add You Trusted Company
      </h1>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={handleImageChange}
            type="file"
            name="image"
            placeholder="Enter your  Image"
            className="max-w-[220px]"
          ></input>
          {/* <Input type="file" color="secondary" /> */}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default AddTrustedCompany;
