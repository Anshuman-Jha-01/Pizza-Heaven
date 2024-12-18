import React from 'react';
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion';
import Loader from './Loader';


const Home = () => {
  const containerVariant = {
    initial: {opacity: 0},
    animate: {
      opacity: 1,
      transition: {delay: 1.5, duration: 1.5}
    },
    exit: {
      x: "-100vw"
    }
  }

  const buttonVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 10px #fff", 
      boxShadow: "0px 0px 10px #fff",
      transition: {
        duration: 0.9,
        repeat: Infinity,
      }
    }
  }

  return (
    <motion.div className="home container"
      variants={containerVariant}
      initial = "initial"
      animate = "animate"
      exit="exit"
    >
      <h2>
        Welcome to Pizza Heaven
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariant}
          whileHover= "hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>

  )
}

export default Home;