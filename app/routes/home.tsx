import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Header from "~/components/header/Header";
import Banner from "~/components/homeComponents/Banner";
import PopularProducts from "~/components/homeComponents/PopularProducts";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <PopularProducts />
      </main>
    </>
  );
}
