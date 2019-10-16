import React from "react";
import Navbar from "../client/components/Navbar";
import Banner from "../client/components/Banner";
import ProductTable from "../client/components/ProductTable";
import "../client/scss/app.scss";

export default function Services() {
  
  const Product = function(name,price){
    this.name = name;
    this.price = price;
  }

  const products = [];

  for(let i = 0;i<5;i++){
    let prod = new Product('Hair Cut','$20');
    products.push(prod);
    // products.push({'Hair Cut':'$20'})
  }
  console.log(products)

  
  
  return (
    <>
      <Navbar />
      <Banner
        bannerImage={"/images/services/S1.jpg"}
        sectionName={"services"}
        content={"SERVICES"}
      />
      <section className='text-center mt-5 pt-5'>
        <h3 className='px-3'>We strive to make you feel and look the best!!</h3>
        <p className='px-3 mt-3'>
          We offer a free consultation for any service we perform. This is a
          time where you can come in and discuss with your stylist what you have
          dreamed of for your hair and can be scheduled directly before your
          appointment time or in advance. Our treat!
        </p>
        <h5 className='mt-4'>Cancellation Policy</h5>
        <p className='px-3 mt-3'>
          We may require a credit card to reserve appointments. In order to
          avoid a service charge, and ensure your appointments for other
          clients, please reschedule or cancel appointments before the 24 hour
          period before your appointment time. 1st occurrence of no show or
          cancellation less than 24 hours: obtain credit card to rebook. 2nd
          occurrence of no show or cancellations less than 24 hours: credit card
          on file will be charged 50% of booked services.
        </p>
      </section>
      <section className='text-center productHeader'>
        <h5>SERVICES</h5>
      </section>
      <section className=''>
        <ProductTable products={products}/>
      </section>
    </>
  );
}