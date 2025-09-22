import JobLocationsButtons from "./components/JobLocationsButtons";
import JobSearchForm from "./components/JobSearchForm";
import { useJobSearchForm } from "./hooks/useJobSearchForm";

const JobSearch = () => {
  const { formik, handleLocationsButtons } = useJobSearchForm();

  return (
    <>
      <JobSearchForm formik={formik} />
      <JobLocationsButtons onClick={handleLocationsButtons} />
    </>
  );
};
export default JobSearch;
