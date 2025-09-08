import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import "../animation.css";
import SignInData from "./Requests/Home Requests/SignInData.js";
import cartsData from "./Requests/Cart/CartInfo.js";
import removeItem from "./Requests/Cart/RemoveCartItem.js";
import Navigation from "./subcomponent/Cart/Navigation.jsx";
import CartList from "./subcomponent/Cart/CartList.jsx";
import MoreDetail from "./Requests/MoreDetails/More.js";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [search, setSearch] = useState("");
  const location = useLocation();
  let incomingData = location.state;

  // ================== CARTS DATA FROM DB ===========================

  const getCarts = async (link) => {
    let info = await SignInData(link);
    let data = [...new Map(info.map((item) => [item.title, item])).values()];
    setCartItems(data);
    setFilteredArray(data);
    handlePrices();
  };

  // =================== ENTRING CARTS DATA IN DB ========================

  useEffect(() => {
    const fetchData = async (link, dataobj) => {
      let info = await cartsData(link, dataobj);
    };

    if (incomingData !== "Only Show") {
      fetchData("cart", incomingData);
      getCarts("cartitems");
    }
  }, [incomingData]);

  // ================ GETTING CARTS ITEMS ----------------------

  useEffect(() => {
    getCarts("cartitems");
  }, []);

  useEffect(() => {
    handlePrices();
  }, [filteredArray]);

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handlePlus = (index) => {
    setFilteredArray(
      filteredArray.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleMinus = (index) => {
    setFilteredArray(
      filteredArray.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // ================== TOTAL PRICE =====================

  const handlePrices = () => {
    if (filteredArray.length > 0) {
      let data = filteredArray.map((item) => item.price * item.quantity);
      setTotalCost(data.reduce((a, b) => a + b));
    } else {
      setTotalCost(0);
    }
  };

  const handleDeleteItem = async (index) => {
    let data = cartItems[index];
    let info = await removeItem("removeitem", data);
    getCarts("cartitems");
  };

  const handleSearch = () => {
    setFilteredArray(
      cartItems.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const makePayment = async () => {
    const stripe = await loadStripe(
      import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    );

    let responseInfo = await MoreDetail(filteredArray, "checkout-session");

    const result = stripe.redirectToCheckout({
      sessionId: responseInfo.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <main className="w-[100%] overflow-hidden">
      <Navigation search={search} setSearch={setSearch} />

      <section className="container w-[70%] mx-auto max-[1170px]:w-[80%] max-[924px]:w-[90%] my-[20px]">
        {/* ================= CART HEADING SECTION ===================== */}

        <section
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className=" flex justify-between items-center pb-[10px]"
        >
          <h1 className="text-[25px] max-[536px]:text-[20px] max-[347px]:text-[18px]  font-[600]">
            Shopping Cart
          </h1>
          <p className="text-[23px] max-[536px]:text-[18px] font-[500]">
            Items : {cartItems.length}
          </p>
        </section>

        {/* ======================== CART ITEMS LIST ====================== */}

        <CartList
          filteredArray={filteredArray}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
          handleDeleteItem={handleDeleteItem}
        />

        {/* ====================== Total Section ============================ */}

        <div className="grow h-[2px] mt-[20px] bg-gray-200"></div>
        <section className="w-full min-h-[60px] max-[696px]:mt-[10px] flex max-[696px]:flex-col gap-x-[30px] max-[696px]:gap-y-[15px] items-center justify-between ">
          <div className="flex items-center max-[656px]:flex-col gap-x-[10px]">
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-[16px] font-[600]"
            >
              Shipping Address
            </p>
            <input
              type="text"
              className="bg-[#F1F1F1] rounded-sm w-[250px] h-[30px] px-[5px] py-[3px] outline-none"
            />
          </div>
          <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            <p className="text-[16px] font-[600]">Total Cost : $ {totalCost}</p>
          </div>
        </section>
        <div className="flex w-full justify-end max-[696px]:justify-center max-[696px]:mt-[10px]">
          <button
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="bg-blue-500 px-[23px] cursor-pointer rounded-sm py-[3px] text-white font-[500] text-[16px] active:brightness-70 border-[1px] border-transparent hover:border-blue-500 hover:bg-white hover:text-blue-500 hover:font-[500] transition-colors ease duration-500"
            disabled={totalCost === 0}
            onClick={makePayment}
          >
            Checkout
          </button>
        </div>
      </section>
    </main>
  );
};

export default Cart;
