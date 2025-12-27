import { useEffect, useState } from "react";
import CartVegetableCard from "../components/vegetablecart";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function MyCart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(existingCart);
  }, []);

  useEffect(() => {
    let total = 0;

    cartItems.map((item) => {
      total += item.price * item.quantity;
    });

    setTotalAmount(total);
  }, [cartItems]);

  return (
    <div>
      <Navbar />

      <h3 className="text-right px-10 mt-4">Total Amount: ₹ {totalAmount} /-</h3>

      <div className="min-h-screen">
        <div className="max-h-[700px]  py-4 overflow-y-scroll">
          {cartItems.map((item) => {
            return <CartVegetableCard key={item.id} {...item} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MyCart;