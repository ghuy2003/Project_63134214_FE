import React from "react";

const CouponInput = () => {
  return (
    <>
      <div class="mt-5">
        <input
          type="text"
          class="border-0 border-bottom rounded me-5 py-3 mb-4"
          placeholder="Coupon Code"
        />
        <button
          class="btn border-secondary rounded-pill px-4 py-3 text-primary"
          type="button"
        >
          Apply Coupon
        </button>
      </div>
    </>
  );
};

export default CouponInput;
