type ButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    addClasses?: string;
}

const GenericButton = (
    {label, onClick, disabled=false, addClasses="bg-cf-dark-gray"}: ButtonProps) => {
    return (
        <>
            <button
                className={`disabled:bg-cf-gray text-white py-2 px-4 ${addClasses}`}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}
export default GenericButton;
