"use client";

import { Textarea } from "@/components/ui/textarea";
import { ErrorMessage } from "@hookform/error-message";
import { FieldValues, useFormContext } from "react-hook-form";

function FormTextArea(props: any) {
  const { label, name, required, placeholder, isDenote } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues, unknown, undefined>();

  return (
    <div className="space-y-1.5">
      <div className="font-inter text-sm select-none font-medium text-theme-primary">
        <label htmlFor={name}>{label}</label>
        {required && isDenote && <span className="mr-1 text-red-400">*</span>}
      </div>
      <Textarea
        {...register(name, {
          required: {
            value: required,
            message: "This field is required",
          },
        })}
        rows={5}
        placeholder={placeholder}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="-mt-1 text-sm text-red-500">{message}</p>
        )}
      />
    </div>
  );
}

export default FormTextArea;
