import type { InputHTMLAttributes, PropsWithChildren } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  pokemonType: string;
}

const CheckboxPokemonType = ({
  children,
  title,
  pokemonType,
  ...props
}: PropsWithChildren<CheckboxProps>) => {
  return (
    <div role="checkbox">
      <input
        id={`checkbox-${pokemonType}`}
        type="checkbox"
        className="hidden peer"
        {...props}
      ></input>
      <label
        htmlFor={`checkbox-${pokemonType}`}
        className="inline-flex items-center justify-between w-full px-2.5 py-4 text-gray-600 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:bg-secondary hover:scale-105 transition-transform"
      >
        <div className="flex items-center gap-2 peer-focus:bg-red-300">
          <img
            width="28"
            height="28"
            className="scale-[1.75] "
            src={`/public/images/icons/pokemon-types/${pokemonType}.svg`}
          />
          <div className="w-full font-semibold first-letter:uppercase">
            {pokemonType}
          </div>
        </div>
      </label>
    </div>
  );
};

export default CheckboxPokemonType;
