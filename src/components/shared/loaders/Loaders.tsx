import React from "react";
import { ProgressBar } from "react-loader-spinner";

export const ProgressBarLoader: React.FC = () => {
    return (
        <ProgressBar
            visible={true}
            height="60"
            width="100"
            barColor="#4b50e6"
            borderColor="#4b50e6"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
};
