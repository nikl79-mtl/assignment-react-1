import { useState } from "react";

const useAnalyze = () => {
    const [avgPassRate, setAvgPassRate] = useState<number | null>(null);

    const handleAnalyze = (selectedID: string) => {
        fetch("/data.csv")
            .then((res) => res.text())
            .then((text) => {
                const lines = text.trim().split("\n");
                const record = lines.slice(1).find((line) => line.split(",")[0] === selectedID);
                if (!record) return;
                const values = record.split(",").slice(2, 7).map(Number);
                const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
                setAvgPassRate(avg);
            });
    };

    return { avgPassRate, handleAnalyze };
};

export default useAnalyze;
