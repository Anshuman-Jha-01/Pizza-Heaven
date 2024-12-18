import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Order = ({ pizza, setShowModal }) => {
  // useEffect lifecycle hook, array with only setShowModal as dep 
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);

  const orderVariant = {
    initial: {opacity: 0},
    animate: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 2
      }
    }
  }

  const childVariant = {
    initial: {opacity:0},
    animate: {opacity:1,scale: [1,1.1,1]}
  }

  return (
    <motion.div className="container order"
      variants={orderVariant}
      initial = "initial"
      animate = "animate"
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      <motion.div 
        variants={childVariant}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    
    </motion.div>
  )
}

export default Order;