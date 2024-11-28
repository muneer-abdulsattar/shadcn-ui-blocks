"use client";

import { blockCategories } from "@/blocks";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const BlocksFilter = () => {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
      {blockCategories.map((category) => (
        <CategoryChip key={category.name} category={category} />
      ))}
    </div>
  );
};

const CategoryChip = ({
  category,
}: {
  category: (typeof blockCategories)[0];
}) => {
  const { category: selectedCategory } = useParams();
  const isSelected = selectedCategory === category.name;

  return (
    <Button
      className={cn(
        "basis-1/12 whitespace-nowrap rounded-full h-7 py-1 pl-2.5 pr-1.5 justify-between"
      )}
      variant={isSelected ? "default" : "outline"}
      asChild
    >
      <Link
        href={isSelected ? "/blocks" : `/blocks/categories/${category.name}`}
      >
        <span className="">{category.name}</span>
        <div className="min-w-3.5 py-0.5 px-1 flex items-center justify-center rounded-full bg-muted border text-muted-foreground text-xs leading-none">
          {category.totalBlocks}
        </div>
      </Link>
    </Button>
  );
};

export default BlocksFilter;
