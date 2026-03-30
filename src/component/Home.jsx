import { Search, ShoppingCart , Menu} from 'lucide-react'


import sleepImg from "../assets/1.png";
import immunityImg from "../assets/2.png";
import beatyImg from "../assets/3.png";
import moodImg from "../assets/4.png";
import React, { useEffect, useState } from 'react'





export default function Home() {

    const [menuOpen,setmenuOpen]=useState(false);


    useEffect(()=>{
    if(menuOpen){
        document.body.classList.add('menu-open');
    }
    else{
        document.body.classList.remove('menu-open');
    }
    return()=>
    document.body.classList.remove('menuOpen');
    
},[menuOpen]);


const categories=[

    {
        title:"SWEET SLEEP",
        img: sleepImg,
    },

    {
        title:"IMMUNITY DEFENSE",
        img: immunityImg,
    },
    {
        title:"BEAUTY FROM WITHIN",
        img: beatyImg,

    },

    {
        title:"MOOD SUPPORT",
        img: moodImg,
    }
];



  return (
    <div className="container">

    <div className="topbanner">

        Free Shipping on Orders Over $59 | SHOP NOW

    </div>

<div className="navbar">

    <h1 className="logo">OLLY.</h1>
    <button className='hamburger' onClick={()=>setMenuOpen(!setmenuOpen)} >
        <Menu size={24} />

    </button>

    <div className={`navlinks $ {menuOpen ? 'active' : ''}`} >
        <p>SHOP</p>
        <p>INSIDE THE PRODUCT</p>
        <p>ABOUT</p>
        <p>OUR MISSION</p>
    </div>


    <div className="navicons">
        <Search  className="search"size={25} />
        <p className="login">LOGIN</p>

        <button className="shopbtn">SHOP NOW</button>

        <ShoppingCart className="shopingcart" size={25} />
    </div>
</div>

<h2 className="titel">Shop by Category</h2>

<div className="cardcontainer">
    {
        categories.map((item,index)=>(
            <div className="card" key={index}>
                <img src={item.img} alt={item.title}/>
                <p>{item.title}</p>
                
            </div>
        ))
    }
</div>


<button className='supportbtn'> ? Support</button>

    </div>
  );
}
