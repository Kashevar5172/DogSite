"use client";

import { Header } from "@/components/header/header";
// import { Items } from "@/components/items";
import React, { useState } from "react";



const Test = () => {
  const [post, setPost] = useState([
    {
      id: 1,
      text: "Йоркширский терьер",
      imageSrc: "/images/terier/Terier.png",
      linkHref: "/pages/Terrier",
      textlink: "Узнать больше ➤",
    },
    {
      id: 2,
      text: "Померанский шпиц (медвежьего типа)",
      imageSrc: "/images/spic/spic.jpg",
      linkHref: "/pages/Pomeranskuy_spic_med",
      textlink: "Узнать больше ➤",
    },
    {
      id: 3,
      text: "Немецкая овчарка",
      imageSrc: "/images/nemec/Nemec.jpg",
      linkHref: "/pages/Nemec",
      textlink: "Узнать больше ➤",
    },
  ],);

  return (
    <div>
      <Header />
      <div>
        {/* <Items   posts={post} /> */}
      </div>
    </div>
  );
};


export default Test;
