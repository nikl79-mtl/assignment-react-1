import { useState } from "react";

const getRandomStatus = () => {
    const statuses = ["GREEN", "ORANGE", "RED"];
    return statuses[Math.floor(Math.random() * statuses.length)];
};

const LiveHeader = () => {
    const [status] = useState(getRandomStatus());

    const getCurrentDate = () => new Date().toLocaleDateString("en-GB");

    const getStatusColor = (status: string) => {
        if (status === "GREEN") return "text-green-500";
        if (status === "ORANGE") return "text-orange-500";
        if (status === "RED") return "text-red-500";
        return "";
    };

    return (
        <h1 className="text-cf-dark-gray text-4xl font bold text-center">
            Test status on {getCurrentDate()} IS:{" "}
            <span className={getStatusColor(status)}>{status}</span>
        </h1>
    )
}

export default LiveHeader