import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCoupon } from "../../services/redux/cartSlice/productSlice";

const CouponInput = () => {
  const [coupon, setCoupon] = useState("");
  const dispatch = useDispatch();

  const handleApplyCouponClick = () => {
    dispatch(applyCoupon({ coupon }));
  };
  return (
    <>
      <div class="mt-5">
        <input
          type="text"
          class="border-0 border-bottom rounded me-5 py-3 mb-4"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button
          class="btn border-secondary rounded-pill px-4 py-3 text-primary"
          type="button"
          onClick={handleApplyCouponClick}
        >
          Apply Coupon
        </button>
      </div>
    </>
  );
};

export default CouponInput;
