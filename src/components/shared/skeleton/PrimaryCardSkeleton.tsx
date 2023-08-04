import React from "react";

function PrimaryCardSkeleton() {
    return (
        <div className="border p-4 space-y-5 rounded-md">
            <h6 className="animate-pulse bg-gray-300 rounded-md h-2 w-1/3"></h6>
            <div className="min-h-[40px]">
                <h5 className="animate-pulse bg-gray-300 rounded-md h-4"></h5>
            </div>

            <div className=" w-[200px] aspect-square animate-pulse bg-gray-300 mx-auto"></div>
            <div className="flex justify-between items-center h-12">
                <h4 className="animate-pulse bg-gray-300 rounded-md h-4 w-1/2"></h4>
                <h4 className="animate-pulse bg-gray-300 h-10 aspect-square rounded-full"></h4>
            </div>
        </div>
    );
}

export default PrimaryCardSkeleton;
