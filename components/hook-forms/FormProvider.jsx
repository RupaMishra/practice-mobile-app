// form
import { FormProvider as Form } from "react-hook-form";

// ----------------------------------------------------------------------

export default function FormProvider({ children, methods }) {
  return (
    <Form {...methods}>
      <>{children}</>
    </Form>
  );
}
