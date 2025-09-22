import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { FormikProps } from "formik";
import { JobSearchFormValues } from "../hooks/useJobSearchForm";
import React from "react";

interface JobSearchFormProps {
  formik: FormikProps<JobSearchFormValues>;
}
export const JobSearchForm: React.FC<JobSearchFormProps> = ({ formik }) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl px-2 
      border border-gray-200 dark:border-gray-500 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto mb-8 gap-2 min-h-[91px]"
    >
      <div className="h-[91px] lg:border-r border-gray-200 flex items-center justify-center p-2 w-full md:w-auto">
        <Input
          type="text"
          name="location"
          placeholder="Location"
          variant="outline"
          value={formik.values.location}
          onChange={formik.handleChange}
          hasError={!!formik.errors.location && formik.touched.location}
          className="w-full md:w-auto border-none"
        />
      </div>
      <div className="h-[91px] lg:border-r border-gray-200 flex items-center justify-center p-2 w-full md:w-auto">
        <Input
          type="text"
          name="keyword"
          placeholder="Keyword"
          variant="outline"
          value={formik.values.keyword}
          onChange={formik.handleChange}
          hasError={!!formik.errors.keyword && formik.touched.keyword}
          className="w-full md:w-auto border-none"
        />
      </div>
      <div className="h-[91px] flex items-center justify-center p-2 w-full md:w-auto">
        <Input
          type="text"
          name="salaryRange"
          placeholder="Salary Range"
          variant="outline"
          value={formik.values.salaryRange}
          onChange={formik.handleChange}
          hasError={!!formik.errors.salaryRange && formik.touched.salaryRange}
          className="w-full md:w-auto border-none"
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        className="px-12 py-3 rounded-xl font-[800] w-full md:max-w-[200px] h-[66px]"
      >
        Search Jobs
      </Button>
    </form>
  );
};

export default JobSearchForm;
