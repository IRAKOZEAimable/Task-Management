interface LabelProps {
    label: string;
    children: React.ReactNode;
}

const Label = ({label, children}: LabelProps) => {
    return (
        <label className="block text-sm font-semibold mb-1">
            {label}
            {children}                
        </label>
    );
}

export default Label;