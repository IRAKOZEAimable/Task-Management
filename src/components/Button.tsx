interface ButtonProps {
    children: React.ReactNode
}

const Button = ({children}: ButtonProps) => {
    return (
        <button
            type="submit"
            className="w-full bg-indigo-400 hover:bg-gray-500 hover:text-white text-black font-bold py-2 rounded-lg transition"
        >
            {children}
        </button>
    );
}

export default Button;