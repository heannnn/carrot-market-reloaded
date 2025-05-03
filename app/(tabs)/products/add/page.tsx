"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { getUploadUrl, uploadProduct } from "./actions";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, ProductType } from "./schema";

export default function AddProduct() {
  const [preview, setPreview] = useState("");
  const [uploadURL, setUploadURL] = useState("");
  const [photoId, setPhotoId] = useState("");
  const { register, handleSubmit } = useForm<ProductType>({
    resolver: zodResolver(productSchema),
  });
  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) {
      return;
    }

    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
    const { success, result } = await getUploadUrl();
    if (success) {
      const { id, uploadURL } = result;
      setUploadURL(uploadURL);
      setPhotoId(id);
    }
  };
  const intercepAction = async (_: any, formData: FormData) => {
    const file = formData.get("photo");
    if (!file) {
      return;
    }
    const cloudflareForm = new FormData();
    cloudflareForm.append("file", file);
    const response = await fetch(uploadURL, {
      method: "POST",
      body: cloudflareForm,
    });
    if (response.status !== 200) {
      return;
    }
    const photoUrl = `https://imagedelivery.net/3ckYganXMjPfMsILJilmaA/${photoId}`;
    formData.set("photo", photoUrl);

    return uploadProduct(_, formData);
  };
  const [state, action] = useFormState(intercepAction, null);
  return (
    <div>
      <form action={action} className="flex flex-col gap-5 p-5">
        <label
          htmlFor="photo"
          className="border-2 aspect-square flex flex-col items-center justify-center text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover"
          style={{
            backgroundImage: `url(${preview})`,
          }}
        >
          {preview === "" ? (
            <>
              <PhotoIcon className="w-28" />
              <div className="text-neutral-400 text-sm">
                사진을 추가해주세요.
                {state?.fieldErrors.photo}
              </div>
            </>
          ) : null}
        </label>
        <input
          type="file"
          onChange={onImageChange}
          id="photo"
          name="photo"
          accept="image/*"
          className="hidden"
        />
        <Input
          required
          placeholder="제목"
          type="text"
          {...register("title")}
          errors={state?.fieldErrors.title}
        />
        <Input
          required
          placeholder="가격"
          type="number"
          {...register("price")}
          errors={state?.fieldErrors.price}
        />
        <Input
          required
          placeholder="자세한 설명"
          type="text"
          {...register("description")}
          errors={state?.fieldErrors.description}
        />
        <Button text="작성완료" />
      </form>
    </div>
  );
}
