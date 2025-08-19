import { useState, useEffect } from "react";
import Cart from "~/components/cart/Cart"; 

export function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
}

export default function ClientOnlyCart() {
  const isClient = useIsClient();
  return isClient ? <Cart /> : null;
}
