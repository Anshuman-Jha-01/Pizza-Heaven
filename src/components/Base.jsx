import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  const containerVariant = {
    initial: {
      x: "200vw"
    },
    animate: {
      x:0,
      transition: {
        delay: 0.2,
        duration: 0.9, 
        type: "spring", 
        stiffness:80,
        when: "beforeChildren"
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
      transition: {duration: 0.3, type: "spring", stiffness: 110}
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
    <motion.div className="base container"
    variants={containerVariant}
      initial = "initial"
      animate = "animate"
      exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)} 
              whileHover={{scale:1.3, originX:0, color: "yellow"}}
              transition={{type:"spring", stiffness:250}}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={buttonDivVariant}
          initial = "initial"
          animate = "animate"
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariant}
               whileHover= "hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;