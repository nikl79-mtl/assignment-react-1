import { useEffect, useState } from "react";
import GenericDropDown from "../GenericDropDown/GenericDropDown.tsx";
import GenericButton from "../GenericButton/GenericButton.tsx";

const ResultAnalyzer = () => {
    const [dates, setDates] = useState<string[]>([]);
    const [selectedID, setSelectedID] = useState<string>("");

    useEffect(() => {
        fetch("/data.csv")
            .then((res) => res.text())
            .then((text) => {
                const lines = text.trim().split("\n");
                const parsedDates = lines.slice(1).map((line) => line.split(",")[0]);
                setDates(parsedDates);
            });
    }, []);

    return (
        <>
            <h1 className="text-center mt-12 text-2xl">Select an execution run for analysis!</h1>
            <div className="text-center mt-4">
                <GenericDropDown
                    title="Select an Execution ID"
                    options={dates}
                    onChange={(selected) => setSelectedID(selected)}
                />
                {selectedID && <p>Selected ID: <strong>{selectedID}</strong></p>}
            </div>
            <div className="text-center mt-4">
                <GenericButton
                    label="Analyze"
                    onClick={() => console.log("Analyze:", selectedID)}
                    disabled={!selectedID}
                />
            </div>
        </>
    );
};

export default ResultAnalyzer;
