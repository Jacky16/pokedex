export const getTypeColorByPokemonTypeName = (
  typeName: string,
): string | null => {
  switch (typeName) {
    case "normal":
      return "#9298A4";
    case "fighting":
      return "#CE4265";
    case "flying":
      return "#90A7DA";
    case "poison":
      return "#A864C7";
    case "ground":
      return "#DC7545";
    case "rock":
      return "#C5B489";
    case "bug":
      return "#92BC2C";
    case "ghost":
      return "#516AAC";
    case "steel":
      return "#52869D";
    case "fire":
      return "#FB9B51";
    case "water":
      return "#4A90DD";
    case "grass":
      return "#5FBC51";
    case "electric":
      return "#EDD53E";
    case "psychic":
      return "#F66F71";
    case "ice":
      return "#70CCBD";
    case "dragon":
      return "#0C69C8";
    case "dark":
      return "#595761";
    case "fairy":
      return "#EC8CE5";
    case "unknown":
      return "#B7B7CE";
    case "shadow":
      return "#595761";
    default:
      return null;
  }
};
