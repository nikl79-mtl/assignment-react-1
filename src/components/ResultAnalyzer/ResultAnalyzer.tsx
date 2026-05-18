import { useEffect, useState } from "react";
import GenericDropDown from "../GenericDropDown/GenericDropDown.tsx";
import GenericButton from "../GenericButton/GenericButton.tsx";
import useAnalyze from "../../hooks/useAnalyze.ts";
import ResultBox from "../ResultBox/ResultBox.tsx";

const ResultAnalyzer = () => {
    const [IDs, setIDs] = useState<string[]>([]);
    const [selectedID, setSelectedID] = useState<string>("");
    const { avgPassRate, handleAnalyze } = useAnalyze();

    useEffect(() => {
        fetch("/data.csv")
            .then((res) => res.text())
            .then((text) => {
                const lines = text.trim().split("\n");
                const parsedIDs = lines.slice(1).map((line) => line.split(",")[0]);
                setIDs(parsedIDs);
            });
    }, []);

    return (
        <>
            <h1 className="text-center mt-12 text-2xl">Select an execution run for analysis!</h1>
            <div className="text-center mt-4">
                <GenericDropDown
                    title="Select an Execution ID"
                    options={IDs}
                    onChange={(selected) => setSelectedID(selected)}
                />
                {selectedID && <p>Selected ID: <strong>{selectedID}</strong></p>}
            </div>
            <div className="text-center mt-4">
                <GenericButton
                    label="Analyze"
                    onClick={() => handleAnalyze(selectedID)}
                    disabled={!selectedID}
                />
            </div>
            {avgPassRate !== null && <ResultBox avgPassRate={avgPassRate} selectedID={selectedID} />}
        </>
    );
};

export default ResultAnalyzer;
