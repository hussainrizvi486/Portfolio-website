import React from 'react';
import Animations from './Animations';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import toast from "react-hot-toast";


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [disabledBtn, setDisabledBtn] = useState(false);
    const submitHandler = async (e) => {
        setDisabledBtn(true);
        try {
            e.preventDefault();
            await addDoc(collection(db, "contacts"), {
                name,
                email,
                message,
            });
            toast.success("Message sent");
            setDisabledBtn(false);
        } catch (error) {
            setDisabledBtn(false);
            toast.success("Error while sending Message");
        }
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div id='contact'>
            <form onSubmit={submitHandler}>
                <h2>Contact Me</h2>
                <motion.input {...Animations.upToDown} type="text" name="" id="" placeholder='Name' required value={name} onChange={(e) => { setName(e.target.value) }} />
                <motion.input {...Animations.upToDown} transition={{ delay: '0.2' }} type="text" name="" id="" placeholder='Email' required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <motion.textarea {...Animations.leftToRight} transition={{ delay: '0.3' }} cols="30" rows="10" placeholder='Message' required value={message} onChange={(e) => { setMessage(e.target.value) }}  ></motion.textarea>
                <motion.button className={disabledBtn ? 'disabledBtn' : ''} {...Animations.upToDown} transition={{ delay: '0.5' }} type="submit" disabled={disabledBtn}>Submit</motion.button>
            </form>
        </div >
    )
}

export default Contact