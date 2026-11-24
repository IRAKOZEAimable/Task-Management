
import AuthCard from "./AuthCard";
import Button from "./Button";
import Label from "./Label";
import Input from "./Input";
import Form from "./Form";
import { useState } from "react";

interface LoginProps {
    onRegister: () => void;
    onLogin: () => void;
}

type FormData = {
    email: string;
    password: string;
}

const Login = ({ onRegister, onLogin  }: LoginProps) => {

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: ""
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        onLogin();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } =e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    return (
        <AuthCard>
            <h1 className="text-xl font-bold text-slate-900 mb-5">
                Welcome back
            </h1>

            <Form onSubmit={handleSubmit}>
                    <Label label="Email">
                        <Input
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        />
                    </Label>
                    <Label label="Password">
                        <Input
                        type="password" name="password" value={formData.password} onChange={handleChange}
                        />
                    </Label>
                    <div className="mt-6">
                        <Button>Log In</Button>
                    </div>
               
            </Form>

            {/* Register Link */}
            <p className="text-center text-sm text-slate-500 mt-4">
                Don't have an account?{" "}

                <button
                    type="button"
                    onClick={onRegister}
                    className="text-indigo-500 font-semibold hover:underline"
                >
                    Register
                </button>
            </p>
        </AuthCard>
    );
};

export default Login;
