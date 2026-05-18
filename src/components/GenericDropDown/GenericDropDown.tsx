type DropDownProps = {
    title: string;
    options: string[];
    onChange: (selected: string) => void;
    addClasses?: string;
}

const GenericDropDown = (
    { title, options, onChange, addClasses = "" }: DropDownProps) => {
    return (
        <select
            className={`border border-gray-300 bg-white text-gray-700 py-2 px-4 ${addClasses}`}
            defaultValue=""
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="" disabled>{title}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    )
}

export default GenericDropDown;
