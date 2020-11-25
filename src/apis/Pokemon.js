import PokeApi from "./PokeApi";

export default {
  all() {
    return PokeApi.get("pokemon");
  },

  type(numberType) {
    return PokeApi.get(`type/${numberType}`);
  },
};
