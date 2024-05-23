export default function RedButon({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center  bg-red-600 border px-1 pt-1 border-b-2 text-sm border-transparent rounded-md font-semibold navbarlink-text text-white uppercase tracking-widest hover:bg-red-400  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
