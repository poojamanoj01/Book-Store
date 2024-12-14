import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OnlinePay = ({ totalAmount, handlePayment }) => {
  const [paymentMethod, setPaymentMethod] = useState("online"); // State to track selected payment method
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

  // Handle the COD option
  const handleCOD = () => {
    // You can add your custom logic for COD, such as storing this option in state or sending it to the backend.
    console.log("Cash on Delivery selected");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Online Payment
        </h2>
        <p className="text-center text-gray-600">
          Complete your payment securely using our platform.
        </p>

        {/* Payment Method Selection */}
        <div className="flex justify-between mt-4">
          <button
            className={`w-full px-4 py-2 text-white rounded-lg shadow-md ${paymentMethod === "online" ? "bg-indigo-600" : "bg-gray-300"}`}
            onClick={() => setPaymentMethod("online")}
          >
            Online Payment
          </button>
          <button
            className={`w-full px-4 py-2 text-white rounded-lg shadow-md ${paymentMethod === "cod" ? "bg-indigo-600" : "bg-gray-300"}`}
            onClick={() => setPaymentMethod("cod")}
          >
            Cash on Delivery
          </button>
        </div>

        {/* Card Payment Form (Only shown for online payment) */}
        {paymentMethod === "online" && (
          <>
            <div className="mt-4">
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card-number"
                placeholder="1234 5678 9012 3456"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div className="flex space-x-4 mt-4">
              <div className="w-1/2">
                <label
                  htmlFor="expiry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="cvc"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  placeholder="123"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>
          </>
        )}

        {/* Display Total Price */}
        <div className="mt-6 text-center">
          <p className="text-lg font-medium text-gray-800">
            Total: <span className="text-indigo-600">₹{totalPrice ? totalPrice : 0}</span>
          </p>
        </div>

        {/* Payment Action Button */}
        <div className="mt-6">
          {paymentMethod === "online" ? (
            <Link to="/success">
              <button
                onClick={handlePayment}
                className="w-full px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
              >
                Pay Now
              </button>
            </Link>
          ) : (
            <Link to="/checkout">
              <button
                onClick={handleCOD}
                className="w-full px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
              >
                Cash on Delivery
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnlinePay;
