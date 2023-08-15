"use client";
import {
  FormInput,
  FormSelect,
  FormSwitch,
  FormSwitchAll,
  FormTextArea,
} from ".";
type HookFormControlProps = {
  control:
    | "input"
    | "password"
    | "textarea"
    | "rich_editor"
    | "input_array"
    | "select"
    | "radio"
    | "checkbox"
    | "switch"
    | "media"
    | "medias"
    | "submit"
    | "image"
    | "permissions"
    | "images"
    | "variants"
    | "toggle"
    | "switchAll";

  label?: string;
  name: string;
  required?: boolean;
  options?: string[];
  type?: string;
  placeholder?: string;
  value?: string;
  values?: string[];
};

function FormControl(props: HookFormControlProps) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <FormInput {...rest} />;
    case "textarea":
      return <FormTextArea {...rest} />;
    case "select":
      return <FormSelect {...rest} />;
    case "switch":
      return <FormSwitch {...rest} />;
    case "switchAll":
      return <FormSwitchAll {...rest} />;
    default:
      return null;
  }
}

export default FormControl;
