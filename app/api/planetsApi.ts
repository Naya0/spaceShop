import { api } from "./baseApi";

export const planetsApi = {
  async getPlanetssApi() {
    return api.get("/planets?min_mass=0");
  },
};
