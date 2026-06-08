import React from "react";

type interface 

const ProductCard = () => {
  return (
    <div className="h-125px rounded-xl border">
      <div className="overflow-hidden rounded-xl border">
        <div className="h-95 bg-gray-200"></div>

        <div className="p-5">
          <h3 className="text-xl font-semibold">Royal Oud</h3>

          <p className="mt-2 text-gray-500">Luxury fragrance</p>

          <p className="mt-4 text-lg font-medium">$120</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
