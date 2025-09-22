import { renderHook, act } from "@testing-library/react";
import { useJobSearchForm } from "./useJobSearchForm";

describe("useJobSearchForm", () => {
  it("initializes with empty values", () => {
    const { result } = renderHook(() => useJobSearchForm());

    expect(result.current.formik.values.location).toBe("");
    expect(result.current.formik.values.keyword).toBe("");
    expect(result.current.formik.values.salaryRange).toBe("");
    expect(result.current.formik.errors).toEqual({});
  });

  it("updates location when handleLocationsButtons is called", async () => {
    const { result } = renderHook(() => useJobSearchForm());

    await act(async () => {
      await result.current.handleLocationsButtons("New York");
    });

    expect(result.current.formik.values.location).toBe("New York");
  });

  it("updates fields dynamically via setFieldValue", async () => {
    const { result } = renderHook(() => useJobSearchForm());

    await act(async () => {
      await result.current.formik.setFieldValue("keyword", "React Developer");
      await result.current.formik.setFieldValue("salaryRange", "1000-2000");
    });

    expect(result.current.formik.values.keyword).toBe("React Developer");
    expect(result.current.formik.values.salaryRange).toBe("1000-2000");
  });

  it("validates required fields", async () => {
    const { result } = renderHook(() => useJobSearchForm());

    await act(async () => {
      await result.current.formik.validateForm();
    });

    expect(result.current.formik.errors.location).toBe("Location is required");
    expect(result.current.formik.errors.keyword).toBe("Keyword is required");
    expect(result.current.formik.errors.salaryRange).toBeUndefined();
  });

  it("submits the form with correct values", async () => {
    const { result } = renderHook(() => useJobSearchForm());

    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    // Set valid field values
    await act(async () => {
      await result.current.formik.setFieldValue("location", "Cairo");
      await result.current.formik.setFieldValue("keyword", "Frontend");
      await result.current.formik.setFieldValue("salaryRange", "5000-10000");
    });

    // Manually mark fields as touched so validation passes
    await act(async () => {
      await result.current.formik.setTouched({
        location: true,
        keyword: true,
        salaryRange: true,
      });
    });

    // Submit the form
    await act(async () => {
      await result.current.formik.submitForm();
    });

    expect(consoleSpy).toHaveBeenCalledWith("Form Submitted:", {
      location: "Cairo",
      keyword: "Frontend",
      salaryRange: "5000-10000",
    });

    consoleSpy.mockRestore();
  });
});
