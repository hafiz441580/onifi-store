import { SkeletonCard } from "@/components/ui";

export default function Loading() {
  return (
    <div className="container-shell section-padding">
      <div className="mb-8 h-32 animate-pulse rounded-[2.5rem] bg-white/20 dark:bg-white/5" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)}
      </div>
    </div>
  );
}
