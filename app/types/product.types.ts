export interface Product {
  id?: number;
  name: string;
  mass: number;
  radius: number | null;
  period: number;
  semi_major_axis: number;
  temperature: number | null;
  distance_light_year: number;
  host_star_mass: number;
  host_star_temperature: number;
}
