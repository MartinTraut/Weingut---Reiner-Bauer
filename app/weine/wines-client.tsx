"use client";

import { useSearchParams } from "next/navigation";
import Wines from "@/components/wines";
import type { WineCategory } from "@/lib/wine-data";

const validCategories: WineCategory[] = ["rot", "weiss", "sekt", "destillate"];

export default function WinesClient() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as WineCategory | null;
  const initialCategory =
    categoryParam && validCategories.includes(categoryParam)
      ? categoryParam
      : "rot";

  return <Wines initialCategory={initialCategory} />;
}
