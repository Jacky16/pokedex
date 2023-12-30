import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: PropsWithChildren<Props>) => (
  <button
    {...props}
    className="text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
  >
    {children}
  </button>
);

export default Button;
