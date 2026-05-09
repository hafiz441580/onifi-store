import { Suspense } from "react";
import { ShopPageClient } from "@/app/shop/shop-page-client";

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopPageClient />
    </Suspense>
  );
}
