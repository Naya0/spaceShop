import type { Route } from "./+types/home";
import Header from "~/components/header/Header";
import Banner from "~/components/homeComponents/Banner";
import PopularProducts from "~/components/homeComponents/PopularProducts";
import AnimationTextBlock from "~/components/homeComponents/AnimationTextBlock";
import { useScroll, animated } from "@react-spring/web";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <Banner />
        <PopularProducts />

        <animated.div style={{ opacity: scrollYProgress }}>
          <AnimationTextBlock />
        </animated.div>
      </main>
    </>
  );
}
