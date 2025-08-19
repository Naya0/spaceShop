import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCartFromStorage } from "~/features/cart/cartSliсe";
import type { CartType } from "~/types/product.types";

export default function CartHydrator() {
  const dispatch = useDispatch();

  useEffect(() => {
    const raw = localStorage.getItem("cart");
    if (raw) {
      try {
        const parsed: CartType[] = JSON.parse(raw);
        dispatch(loadCartFromStorage(parsed));
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
  }, []);

  return null;
}
