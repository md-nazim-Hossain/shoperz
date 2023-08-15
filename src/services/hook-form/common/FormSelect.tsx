"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

function FormSelect(props: any) {
  const { label, name, required, options, placeholder } = props;
  const {
    register,
    setValue,
    setError,
    getValues,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1.5">
      <div className="font-inter text-sm select-none font-medium text-theme-primary">
        {label}
        {required && <span className="mr-1 text-red-400">*</span>}
      </div>
      <Select
        {...register(name, {
          required: {
            value: required,
            message: "This field is required",
          },
        })}
        onValueChange={(value: string) => {
          setValue(name, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
          });
          setError(name, {});
        }}
        defaultValue={getValues(name) || undefined}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder || "Select Value"} />
        </SelectTrigger>
        <SelectContent className="capitalize">
          <SelectGroup className="capitalize">
            {options.map((option: string, index: number) => (
              <SelectItem className="capitalize" key={index} value={option}>
                <span className="capitalize">{option}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
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

export default FormSelect;
