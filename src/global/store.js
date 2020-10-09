import axios from "axios";

export default {
  actions: {
    getAllMovies() {
      return axios.get(
        "https://swapi.dev/api/films/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        {
          mode: "no-corse",
        }
      );
    },
  },
};
