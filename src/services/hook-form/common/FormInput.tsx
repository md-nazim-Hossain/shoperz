"use client";

import { Input } from "@/components/ui/input";
import { ErrorMessage } from "@hookform/error-message";
import { FieldValues, useFormContext } from "react-hook-form";

function FormInput(props: any) {
  const { label, name, required, type, placeholder } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues, unknown, undefined>();

  return (
    <div className="space-y-1.5">
      <div className="font-inter text-sm select-none font-medium text-theme-primary">
        <label htmlFor={name}>{label}</label>
        {required && <span className="mr-1 text-red-400">*</span>}
      </div>
      <Input
        {...register(name, {
          required: {
            value: required,
            message: "This field is required",
          },
        })}
        type={type}
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

export default FormInput;
