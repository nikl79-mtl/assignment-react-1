interface ResultBoxProps {
    avgPassRate: number;
    selectedID: string;
}

const ResultBox = ({ avgPassRate, selectedID }: ResultBoxProps) => {
    const testColorVariable = avgPassRate >= 95 ? "GREEN" : avgPassRate >= 80 ? "ORANGE" : "RED";
    const colorClass = testColorVariable === "GREEN" ? "text-green-500" : testColorVariable === "ORANGE" ? "text-orange-500" : "text-red-500";

    return (
        <div className="flex justify-center mt-4 text-2xl">
            <div className="border border-gray-400 rounded-lg p-4">
                <p>Average pass rate for ID <strong>{selectedID}</strong>: <strong>{avgPassRate.toFixed(2)}%</strong></p>
                <p>TEST RESULT IS : <strong className={colorClass}>{testColorVariable}</strong></p>
            </div>
        </div>
    );
};

export default ResultBox;
