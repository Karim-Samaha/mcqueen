import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

export interface JobSearchFormValues {
  location: string;
  keyword: string;
  salaryRange: string;
}

export const useJobSearchForm = () => {
  const initialValues: JobSearchFormValues = {
    location: "",
    keyword: "",
    salaryRange: "",
  };

  const validationSchema = Yup.object({
    location: Yup.string().required("Location is required"),
    keyword: Yup.string().required("Keyword is required"),
    salaryRange: Yup.string(), // optional
  });

  const formik = useFormik<JobSearchFormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values, helpers: FormikHelpers<JobSearchFormValues>) => {
      console.log("Form Submitted:", values);
    },
  });

  // Method to set any field value dynamically
  const setField = (key: keyof JobSearchFormValues, value: string) => {
    formik.setFieldValue(key, value);
  };
  const handleLocationsButtons = (value: string) => setField('location', value)

  return {
    formik,
    handleLocationsButtons,
  };
};
