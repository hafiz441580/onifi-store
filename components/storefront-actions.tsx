"use client";

import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui";
import { useStore } from "@/components/store-provider";
import { useToast } from "@/components/toast-provider";

export function AddToCartPanel({ productId, productName }: { productId: string; productName: string }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isWishlisted, toggleWishlist } = useStore();
  const { showToast } = useToast();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="glass-panel flex items-center gap-3 rounded-full px-3 py-2">
          <button onClick={() => setQuantity((value) => Math.max(1, value - 1))}><Minus className="h-4 w-4" /></button>
          <span className="min-w-8 text-center">{quantity}</span>
          <button onClick={() => setQuantity((value) => value + 1)}><Plus className="h-4 w-4" /></button>
        </div>
        <Button className="flex-1" onClick={() => { addToCart(productId, quantity); showToast(`${productName} added to cart`); }}>Add to Cart</Button>
        <button onClick={() => toggleWishlist(productId)} className="glass-panel rounded-full p-3" aria-label="Toggle wishlist"><Heart className={`h-5 w-5 ${isWishlisted(productId) ? "fill-current text-rose-500" : ""}`} /></button>
      </div>
      <Button href="/checkout" variant="secondary" className="w-full">Buy Now</Button>
    </div>
  );
}
