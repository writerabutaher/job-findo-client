import React from "react";

const CategoryCard = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, , 7, 8].map((e) => (
          <div>
            <img src="/" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
