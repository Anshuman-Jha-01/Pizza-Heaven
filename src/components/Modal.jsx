import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
}

const modal = {
    initial: {y:"-100vh"},
    animate: {
        y:"340px",
        transition: {duration:0.5, delay: 0.1}
    }
} 

const buttonVariant = {
    hover: {
      scale: 1.2, 
      textShadow: "0px 0px 10px #fff", 
      boxShadow: "0px 0px 10px #fff"
    }
  }

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence>
      { showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="initial"
          animate="animate"
        >
            <motion.div className="modal"
                variants={modal}
                initial = "initial"
                animate = "animate" 
                exit="initial"
            >
                <p>Want to create a new pizza?</p>
                <Link to="/">
                    <motion.button
                        variants={buttonVariant}
                        whileHover="hover"
                    >
                        Start again!
                    </motion.button>
                </Link>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal;