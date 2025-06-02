import React from "react";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`transition-all duration-200 ${
            activeCategory === category
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "text-slate-600 hover:text-purple-600 hover:border-purple-300"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
