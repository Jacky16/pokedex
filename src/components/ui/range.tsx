import {
  Root as SliderRoot,
  Track as SliderTrack,
  Range as SliderRange,
  Thumb as SliderThumb,
  type SliderProps,
} from "@radix-ui/react-slider";

interface RangeProps extends SliderProps {}

const Range = ({ ...props }: RangeProps) => {
  return (
    <SliderRoot
      {...props}
      className="relative flex items-center select-none touch-none w-full h-5"
      defaultValue={[50]}
      max={100}
      step={1}
    >
      <SliderTrack className="bg-blackA7 relative grow rounded-full h-3 bg-neutral-200">
        <SliderRange className="absolute h-full bg-secondary rounded-full   " />
      </SliderTrack>
      <SliderThumb
        className="block w-6 h-6 bg-white hover:bg-neutral-50  shadow-blackA4 rounded-full hover:bg-violet3 focus:outline-none  focus:shadow-blackA5"
        aria-label="Volume"
      />
    </SliderRoot>
  );
};

export default Range;
