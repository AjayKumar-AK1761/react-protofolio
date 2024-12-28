import {CONTACT} from "../constants/index";
import {motion} from 'framer-motion';

const Contacts = () => {
  return (
    <div className="border-b border-neutral-800 pb-10 mb-1">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial = {{opacity: 0, y: -100}}
        trannsition ={{duration: 1.5}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>

        <div className="text-center tracking-tighter">

            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial = {{opacity: 0, x: -100}}
            trannsition ={{duration: 1.5}}
            className="my-4">{CONTACT.address}</motion.p>

            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial = {{opacity: 0, x: 100}}
            trannsition ={{duration: 1.5}}
            className="my-4">{CONTACT.phoneNo}</motion.p>

            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contacts
