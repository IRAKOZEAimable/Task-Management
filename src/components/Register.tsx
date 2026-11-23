
import AuthCard from "./AuthCard";

interface RegisterProps {
    onLogin: () => void;
}

const Register = ({ onLogin }: RegisterProps) => {
    return (
        <AuthCard>
            <h1 className="text-xl font-bold text-slate-900 mb-5">
                Create your account
            </h1>

            <form className="space-y-4">

                {/* Name Field */}
                <div>
                    <label className="block text-sm font-semibold mb-1">
                        Name
                    </label>

                    <input
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-semibold mb-1">
                        Email
                    </label>

                    <input
                        type="email"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-sm font-semibold mb-1">
                        Password
                    </label>

                    <input
                        type="password"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full bg-indigo-400 hover:bg-gray-600 hover:text-white text-black font-semibold py-2 rounded-lg transition"
                >
                    Register Now
                </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-sm text-slate-500 mt-4">
                Already have an account?{" "}

                <button
                    type="button"
                    onClick={onLogin}
                    className="text-indigo-500 font-semibold hover:underline"
                >
                    Log in
                </button>
            </p>
        </AuthCard>
    );
};

export default Register;
