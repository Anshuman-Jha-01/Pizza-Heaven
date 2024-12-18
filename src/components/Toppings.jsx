import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  const containerVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type:"tween",
        delay: 0.2, 
        duration: 0.8,
      }
    },
    exit: {
      x: "-100vw"
    }
  }

  const buttonDivVariant = {
    initial: {x: "-100vw"},
    animate: {
      x : 0,
      transition: {delay: 0.7, duration: 1, type:"spring", stiffness: 120}
    }
  }
  
  const buttonVariant = {
    hover: {
      scale: 1.2, 
      textShadow: "0px 0px 10px #fff", 
      boxShadow: "0px 0px 10px #fff"
    }
  }

  return (
    <motion.div className="toppings container"
      variants={containerVariant}
      initial = "initial"
      animate = "animate"
      exit="exit"
    >
      <div>
        <h3>Step 2: Choose Toppings</h3>
        <ul>
          {toppings.map(topping => {
            let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
            return (
              <motion.li key={topping} onClick={() => addTopping(topping)}
                whileHover={{originX:0,scale:1.3, color: "yellow"}}
                transition={{type:"spring", stiffness:250}}
              >
                <span className={spanClass}>{ topping }</span>
              </motion.li>
            )
          })}
        </ul>
      </div>

      <motion.div
        variants={buttonDivVariant}
        initial = "initial"
        animate = "animate"
      >
        <Link to="/order">
          <motion.button
            variants={buttonVariant}
            whileHover= "hover"
          >
            Order
          </motion.button>
        </Link>
      </motion.div>
     

    </motion.div>
  )
}

export default Toppings;