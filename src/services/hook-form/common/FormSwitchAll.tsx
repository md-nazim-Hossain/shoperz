import { Switch } from "@/components/ui/switch";
import { arrayEquals } from "@/utils/common";
import { ErrorMessage } from "@hookform/error-message";
import { FieldValues, useFormContext } from "react-hook-form";

function FormSwitchAll(props: any) {
  const { name, required, label, values } = props;
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<FieldValues, unknown, undefined>();

  return (
    <div className="flex items-center gap-5 justify-between">
      <label
        className="text-sm text-theme-primary/70 capitalize"
        htmlFor={name}
      >
        {label}
      </label>
      <Switch
        {...register(name, {
          required: {
            value: required,
            message: "This field is required",
          },
        })}
        id={name}
        checked={arrayEquals(getValues(name), values)}
        onCheckedChange={(e: boolean) => {
          if (e) {
            setValue(name, values, {
              shouldDirty: true,
              shouldTouch: true,
              shouldValidate: true,
            });
          } else {
            setValue(name, [""], {
              shouldDirty: true,
              shouldTouch: true,
              shouldValidate: true,
            });
          }
        }}
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

export default FormSwitchAll;
