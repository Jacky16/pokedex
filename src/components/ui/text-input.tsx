import type { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = ({ ...props }: TextInputProps) => {
  return (
    <div className="relative w-full" role="searchbox">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>pokemon</title>
          <path
            d="M9.17 13H3a1 1 0 0 1-1-1C2 6.477 6.477 2 12 2c4.128 0 7.786 2.524 9.29 6.294a1 1 0 1 1-1.857.741A8.002 8.002 0 0 0 4.062 11H9.17a3.001 3.001 0 0 1 5.658 0h6.173a1 1 0 0 1 1 1c0 5.523-4.477 10-10 10a10.002 10.002 0 0 1-9.29-6.294 1 1 0 0 1 1.857-.741A8.002 8.002 0 0 0 19.939 13h-5.11a3.001 3.001 0 0 1-5.658 0zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            fill="#3e3e3e"
            fillRule="nonzero"
          ></path>
        </svg>
      </div>

      <input
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-primary/40 block w-full ps-10 p-2.5"
      />
    </div>
  );
};

export default TextInput;
