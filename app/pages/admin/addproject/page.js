"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-zinc-900 m-10 rounded-md">
      <h1 className="flex justify-center text-3xl font-semibold p-10">
        ADD YOUR PROJECT
      </h1>

      <div className="add-project-sub-container">
        <div className="project-form  flex justify-center">
          <form
            className="bg-zinc-500 flex justify-center flex-col gap-10 p-5 rounded-lg my-10"
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
            <label htmlFor="image">Upload Project Image</label>
            <input id="image" type="file" placeholder="upload image" />
            </div>
            
            <input
              className="w-[30rem] rounded-lg p-1"
              type="text"
              {...register("name" , {
                required:"filed is required.."
              })}
              placeholder="project name"
            />
            {errors.name && <p>{errors.name.message}</p>}
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
