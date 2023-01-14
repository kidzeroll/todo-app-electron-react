const Button = ({ disabled = false, type = "submit", className, ...props }) => {
    return (
        <button
            type={type}
            className={`${className}flex-row items-center justify-center px-4 py-2 rounded-lg shadow-lg justify-items-center text-white flex bg-gradient-to-r from-sky-500/70 to-indigo-500/70 hover:from-sky-500 hover:to-indigo-500`}
            {...props}
        />
    );
};

export default Button;
