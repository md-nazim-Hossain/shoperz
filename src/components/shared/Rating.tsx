import React from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Props = {
  value: number;
};
function Rating({ value }: Props) {
  return (
    <h5 className="flex items-center">
      {[1, 2, 3, 4, 5].map((item) => {
        return (
          <span key={item}>
            {item <= value ? (
              <AiFillStar className="text-yellow-400" size={16} />
            ) : (
              <AiOutlineStar size={16} />
            )}
          </span>
        );
      })}
    </h5>
  );
}

export default Rating;
