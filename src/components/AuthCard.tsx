

interface AuthCardProps {
    children: React.ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
    return (
        <div className="w-full max-w-md bg-white p-6 rounded-xl border border-gray-200 shadow-xl">
            {children}
        </div>
    );
};

export default AuthCard;
