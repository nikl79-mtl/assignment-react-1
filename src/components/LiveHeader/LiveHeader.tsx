import { useEffect, useState } from "react";

const LiveHeader = () => {
    const [latestExecutionDate, setLatestExecutionDate] = useState<string>("");

    useEffect(() => {
        fetch("/data.csv")
            .then((res) => res.text())
            .then((text) => {
                const lines = text.trim().split("\n").slice(1);
                const sorted = lines.sort((a, b) => Number(b.split(",")[0]) - Number(a.split(",")[0]));
                const date = sorted[0].split(",")[1];
                setLatestExecutionDate(date);
            });
    }, []);

    return (
        <h1 className="text-cf-dark-gray text-4xl font bold text-center">
            Last execution was on: {latestExecutionDate}
        </h1>
    );
};

export default LiveHeader;