interface FormProps {
    onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}

const Form = ({onSubmit, children}: FormProps) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4">{children}</form>
    )
    
} 

export default Form;