export interface ContactFormState {
  status: "idle" | "success" | "error";
  fieldErrors: {
    name?: string;
    phone?: string;
  };
}

export const initialContactFormState: ContactFormState = {
  status: "idle",
  fieldErrors: {},
};
