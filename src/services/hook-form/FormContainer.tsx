import { yupResolver } from "@hookform/resolvers/yup";
import { ReactNode } from "react";
import {
  DeepPartial,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import { AnyObject, ObjectSchema } from "yup";
type Props = {
  onSubmit: (data: { [x: string]: unknown }) => void;
  initialValues: DeepPartial<FieldValues>;
  schema: ObjectSchema<{ [x: string]: unknown }, AnyObject, unknown, "">;
  children: ReactNode;
};
function FormContainer({ onSubmit, initialValues, schema, children }: Props) {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default FormContainer;
