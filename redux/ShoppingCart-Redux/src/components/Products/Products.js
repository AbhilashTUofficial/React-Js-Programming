import React from "react";
import styles from "./Products.module.css";
import Product from "./Product/Product";
//! Connect function define which data should pass to the
//! Product component
//! This is very important.
import { connect } from "react-redux";

const Products = ({ products }) => {
  return (
    <div className={styles.products}>
      {products.map((prod) => (
        <Product key={prod.id} productData={prod} />
      ))}
    </div>
  );
};

//! mapStateToProps take products from the shop and
//! pass it to Products component
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
