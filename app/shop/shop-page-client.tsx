"use client";

import { useSearchParams } from "next/navigation";
import { ShopExperience } from "@/components/storefront";

export function ShopPageClient() {
  const searchParams = useSearchParams();

  return (
    <ShopExperience
      initialCategory={searchParams.get("category") ?? "all"}
      initialSearch={searchParams.get("query") ?? ""}
      initialCollection={searchParams.get("collection") ?? "all"}
    />
  );
}
