
import * as Yup from "yup";

export const studentValidation = Yup.object({
    name: Yup.string()
        .trim()
        .required("Please enter student name"),

    GRid: Yup.string()
        .trim()
        .required("Please enter GR ID"),

    course: Yup.string()
        .trim()
        .required("Please enter course"),

    MobileNumber: Yup.string()
        .matches("Enter a valid 10-digit mobile number")
        .required("Please enter mobile number"),
});
