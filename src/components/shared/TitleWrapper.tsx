import React, { ReactNode } from "react";

type Props = {
    title: string | ReactNode;
};
function TitleWrapper({ title }: Props) {
    return (
        <h3 className="text-tertiary w-max font-medium border-b border-b-primary pb-1">
            {title}
        </h3>
    );
}

export default TitleWrapper;
