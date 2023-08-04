import React from "react";

function SecondaryCardSkeleton() {
    return (
        <div className="bg-white cursor-pointer group border p-4 flex justify-center gap-6 items-center rounded-md">
            <div className="w-[110px] aspect-square animate-pulse bg-gray-300 rounded-md"></div>
            <div className="space-y-5 flex-1">
                <h5 className="animate-pulse bg-gray-300 rounded-md h-2"></h5>
                <div className="animate-pulse bg-gray-300 rounded-md h-4"></div>
                <h4 className="animate-pulse bg-gray-300 rounded-md h-4 w-1/2"></h4>
            </div>
        </div>
    );
}

export default SecondaryCardSkeleton;
