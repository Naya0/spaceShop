import React, { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "~/features/hooks";

interface Props {
  getFilterList: (selected: string[]) => void;
}

const ProductFilter = ({ getFilterList }: Props) => {
  const categories = useAppSelector((state) => state.categories);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categoryNames = useMemo(
    () => categories.list.map((c) => c.name),
    [categories.list]
  );

  const allSelected = selectedCategories.length === categoryNames.length;
  const isIndeterminate = selectedCategories.length > 0 && !allSelected;

  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleAll = () => {
    setSelectedCategories(allSelected ? [] : categoryNames);
  };

  useEffect(() => {
    getFilterList(selectedCategories);
  }, [selectedCategories]);

  return (
    <aside>
      <h3>Categories</h3>
      <div className="flex flex-col gap-2">
        <div className="text-sm flex items-center gap-2">
          <input
            type="checkbox"
            name="reset"
            id="reset"
            ref={(input) => {
              if (input) input.indeterminate = isIndeterminate;
            }}
            onChange={toggleAll}
          />
          <label htmlFor="reset">Select all</label>
        </div>
        {categories.list.map((item) => (
          <div key={item.id} className="text-sm flex items-center gap-2">
            <input
              type="checkbox"
              name={item.name}
              id={item.name}
              checked={selectedCategories.includes(item.name)}
              onChange={() => handleCheckboxChange(item.name)}
            />
            <label htmlFor={item.name}>{item.name}</label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ProductFilter;
