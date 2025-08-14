import Header from "~/components/header/Header";
import Banner from "~/components/homeComponents/Banner";
import PopularProducts from "~/components/homeComponents/PopularProducts";
import AnimationTextBlock from "~/components/homeComponents/AnimationTextBlock";
import { useScroll, animated } from "@react-spring/web";
import EasyOrder from "~/components/homeComponents/sectionEasyOrder/EasyOrder";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "~/features/products/productsSlice";
import type { AppDispatch } from "~/features/store";


export default function Home() {
  const { scrollYProgress } = useScroll();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      {/* <Header /> */}
      {/* <main className="scroll-smooth"> */}
        <Banner />
        <PopularProducts />

        <animated.div style={{ opacity: scrollYProgress }}>
          <AnimationTextBlock />
          <EasyOrder />
        </animated.div>
      {/* </main> */}
    </>
  );
}
