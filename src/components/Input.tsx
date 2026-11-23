interface InputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({type, name, value, onChange}: InputProps) => {
    return (
        <input type={type} name={name} value={value} onChange={onChange} 
        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
        />
    )
}

export default Input;