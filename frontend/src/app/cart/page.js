"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "@/store/slices/cartSlice";
import Link from "next/link";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
          <Link href="/shop" className="mt-4 inline-block bg-aqua-dark text-white py-2 px-4 rounded">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-2 border-b">Item</th>
              <th className="text-left p-2 border-b">Quantity</th>
              <th className="text-right p-2 border-b">Price</th>
              <th className="text-right p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border-b">{item.name}</td>
                <td className="p-2 border-b">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="w-16 p-1 border rounded"
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                </td>
                <td className="p-2 border-b text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-2 border-b text-right">
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={handleClearCart}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Clear Cart
          </button>
          <div className="text-lg font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <Link href="/checkout" className="bg-aqua-dark text-white py-2 px-4 rounded hover:bg-aqua-light">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
