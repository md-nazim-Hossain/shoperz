import { yupResolver } from "@hookform/resolvers/yup";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
type Props = {
  onSubmit: (data: any) => void;
  initialValues: any;
  schema: any;
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
