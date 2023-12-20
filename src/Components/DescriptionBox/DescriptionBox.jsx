import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform where businesses sell
          products or services to customers. It facilitates electronic
          transactions, allowing users to browse, select items, and make secure
          online purchases. E-commerce websites often include features like
          shopping carts, secure payment gateways, and order tracking. They
          provide a convenient and accessible way for businesses to reach a
          global audience and for consumers to shop from the comfort of their
          homes. Popular examples include Amazon, eBay, and Shopify stores.
        </p>
        <p>
          E-commerce website enables online buying and selling, offering a
          digital marketplace for businesses to showcase and sell products to a
          global audience, streamlining transactions and enhancing
          accessibility.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
