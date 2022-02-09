/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React from "react";
import Image from "next/image";
import img1 from "../assets/pracovna1.jpg";
import img2 from "../assets/pracovna2.jpg";
import useWindowDimensions from "../hooks/useWindowDimension";

const first = () => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-10 m-4 font-bold bg-cover 2xl:h-full bg-motive">
        <p className="pb-4">
          První setkání V průběhu prvního setkání mám možnost se prvotně seznámit s tématem, se kterým za mnou přicházíte a
          domluvit se s Vámi na formě spolupráce, která Vám bude nejvíce vyhovovat. Nabízím krátkodobou i dlouhodobější formu
          spolupráce.
        </p>
        <div className="grid gap-4 mt-4 xl:grid-cols-3 2xl:grid-cols-4">
          <div className="2xl:col-span-2">
            <p className="pb-4">​Na první setkání je zapotřebí se předem objednat prostřednictvím telefonu, nebo e-mailu.</p>
            <p className="pb-4">Cena poskytovaných služeb</p>
            <p className="pb-4">Cena:........................700 Kč/50 minut.</p>
            <p>
              Zrušení domluveného setkání 24 hodin předem je zdarma. V případě zrušení domluveného setkání později než 24 hodin
              před jeho začátkem klient hradí jeho plnou cenu
            </p>
          </div>

          <Image
            placeholder="blur"
            src={img1}
            alt="Pracovna 1"
            width={400}
            height={400}
            layout={width && width > 1300 ? "fixed" : "responsive"}
          />

          <Image
            placeholder="blur"
            src={img2}
            alt="Pracovna 2"
            width={400}
            height={400}
            layout={width && width > 1300 ? "fixed" : "responsive"}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default first;
