import React from "react";

function CategoryCardSkeleton() {
  return (
    <div className="border p-4 space-y-4 bg-white rounded-md">
      <p className="animate-pulse bg-gray-300 h-4 w-1/2 mx-auto rounded-md"></p>
      <div className="w-[200px] aspect-square mx-auto animate-pulse bg-gray-300 rounded-md"></div>
      <div className="flex justify-end items-center">
        <h4 className="animate-pulse bg-gray-300 h-10 aspect-square rounded-full"></h4>
      </div>
    </div>
  );
}

export default CategoryCardSkeleton;
