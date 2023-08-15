import * as yup from "yup";
export const addReviewSchema = yup.object({
  review: yup.string().required("Review is required"),
  rating: yup
    .number()
    .min(2, "Unacceptable rating")
    .required("Rating is required"),
});
