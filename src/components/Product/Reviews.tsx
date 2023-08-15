"use client";

import { addReviewSchema } from "@/schema";
import FormContainer from "@/services/hook-form/FormContainer";
import FormControl from "@/services/hook-form/FormControl";
import { Product } from "@/types";
import { ErrorMessage } from "@hookform/error-message";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Rating as ReactRating } from "react-simple-star-rating";
import PrimaryButton from "../shared/Buttons/PrimaryButton";
import { ModalContainer } from "../shared/ModalContainer";
import Rating from "../shared/Rating";
import { Button } from "../ui/button";
type Props = {
  product: Product;
};
const tooltipArray = [
  "Unacceptable",
  "Week",
  "Acceptable",
  "Good",
  "Excellent",
];
const fillColorArray = ["#f1a545", "#f1b345", "#f1b345", "#f1d045", "#f1d045"];
function Reviews({ product }: Props) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className="space-y-10">
      <div className="border-b">
        <div className="flex justify-between items-center py-10 px-5">
          <div className="w-1/2"></div>
          <div className="flex-1 border-l px-5 space-y-10">
            <h3 className="font-medium">Add Your Review</h3>
            <ReactRating
              onClick={e => setRating(e)}
              size={30}
              transition
              showTooltip
              tooltipArray={tooltipArray}
              fillColorArray={fillColorArray}
            />
            <ModalContainer
              className="max-w-[500px]"
              open={open}
              onChange={e => setOpen(e)}
              trigger={
                <Button className="bg-primary/70 w-[200px] hover:bg-primary duration-300 font-medium text-white px-5 py-3 rounded-3xl flex justify-center items-center space-x-2">
                  Add a Review
                </Button>
              }
              title={
                <div className="flex items-center gap-10 pb-5 border-b">
                  <Image
                    sizes="50px"
                    width={50}
                    height={50}
                    alt={product.model + ""}
                    src={product.image[0]}
                  />
                  <h5 className="text-primary font-medium">{product?.model}</h5>
                </div>
              }
            >
              <FormContainer
                schema={addReviewSchema}
                initialValues={{ review: "", rating: rating }}
                onSubmit={e => {
                  console.log(e);
                }}
              >
                <ReviewFormField />
              </FormContainer>
            </ModalContainer>
          </div>
        </div>
      </div>
      <div className="px-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="flex py-5 items-center gap-5 border-b last:border-b-0"
          >
            <div className="w-max">
              <div className="bg-secondary/10 w-12 h-12 aspect-square relative border-2 border-secondary/30 rounded-full"></div>
              <h4 className="font-medium">Name</h4>
              <h5>Feb 22,2023</h5>
            </div>
            <div className="flex-1">
              <h4 className="font-medium mb-2">Excellent</h4>
              <Rating value={4} />
              <p className="text-secondary/70 mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum iusto id officia neque eaque repellendus labore hic sed
                quisquam laborum. Ipsa asperiores laudantium ipsum quasi
                perspiciatis adipisci, at obcaecati beatae.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;

const ReviewFormField = () => {
  const {
    setValue,
    getValues,
    formState: { errors, isSubmitting, isValid },
  } = useFormContext();
  return (
    <div className="space-y-5">
      <ReactRating
        initialValue={getValues("rating")}
        onClick={value => {
          setValue("rating", value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
          });
        }}
        size={30}
        transition
        showTooltip
        tooltipArray={tooltipArray}
        fillColorArray={fillColorArray}
      />
      <ErrorMessage
        render={({ message }) => (
          <p className="-mt-1 text-sm text-red-500">{message}</p>
        )}
        errors={errors}
        name="rating"
      />

      <FormControl
        control="textarea"
        name="review"
        placeholder="Write a Review"
        required
      />

      <PrimaryButton
        disabled={isSubmitting || !isValid}
        type="submit"
        title="Add Review"
        className="w-full disabled:bg-opacity-50"
        Icon={isSubmitting ? Loader : undefined}
        iconStyle="animate-spin"
      />
    </div>
  );
};
