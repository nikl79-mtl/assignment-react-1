import { useEffect, useState } from "react";

const ResultTable = () => {
    const [headers, setHeaders] = useState<string[]>([]);
    const [rows, setRows] = useState<string[][]>([]);

    useEffect(() => {
        fetch("/data.csv")
            .then((res) => res.text())
            .then((text) => {
                const lines = text.trim().split("\n");
                const parsedHeaders = lines[0].split(",");
                const parsedRows = lines.slice(1).map((line) => line.split(","));
                setHeaders(parsedHeaders);
                setRows(parsedRows);
            });
    }, []);

    return (
        <div className="overflow-x-auto mt-12">
            <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100 text-left font-semibold text-gray-700">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="border border-gray-300 px-4 py-2">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="border border-gray-300 px-4 py-2">{cellIndex <= 1 ? cell : `${cell}%`}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultTable;
