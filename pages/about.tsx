import Head from "next/head";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import useWindowDimensions from "../hooks/useWindowDimension";

const about = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { width } = useWindowDimensions();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoaded, setLoaded] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (width) return setLoaded(true);
  }, [width]);

  return (
    <>
      <Head>
        <title>Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé</title>
        <meta
          name="description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <link rel="canonical" href="https://www.psycholog-terapeut-brno.cz/o-mně" />
        <meta property="og:title" content="Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé" />
        <meta
          property="og:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta property="og:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-orez.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.psycholog-terapeut-brno.cz/o-mně" />
        <meta property="og:site_name" content="mobil kontakty" />
        <meta name="google-site-verification" content="UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé" />
        <meta
          name="twitter:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta name="twitter:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-orez.png" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2"
          crossOrigin=""
        />
      </Head>
      <div className="min-h-full p-10 m-4 text-white bg-cover bg-motive">
        <p className="pb-4">
          Jmenuji se Petr Davídek a působím jako psycholog a terapeut v Brně. V rámci své soukromé praxe nabízím psychologické
          poradenství a terapii pro děti, dospívající a dospělé.
        </p>
        <p className="pb-4">
          Vedle soukromé praxe působím jako školní psycholog na základní škole v Brně, kde poskytuji konzultace rodičům a
          učitelům, pracuji se třídními kolektivy a individuálně s dětmi a dospívajícími. Dlouhodobě také pracuji s dětmi s ADHD,
          pro které jsem vedl i vícero specializovaných programů zaměřených na sociálně-emoční učení, podporu jejich vztahů s
          vrstevníky a pozitivních vzorců chování.
        </p>
        <div className="grid gap-4 mt-4 xl:grid-cols-2 ">
          <div>
            <p>
              Při své práci respektuji jedinečnost a osobní tempo klientů a vycházím z Biosyntetické psychoterapie - moderní
              metody v psychosomatické psychoterapii, která rozvíjí přirozené zdroje a klade důraz na bezpečí a soulad mezi tím,
              jak se člověk cítí, co si myslí, jak se chová a jak tomu všemu rozumí. Kromě zaměření se na to, co člověk cítí a co
              si myslí, si také s klienty všímám, jak na situaci, kterou řeší, reaguje jejich tělo – jestli např. mají napjaté
              svaly, obtížně se jim dýchá nebo je něco bolí apod.
            </p>
            <p>S dětmi využívám i prvky terapie hrou, která je pro ně přirozenou a bezpečnou formou jejich rozvoje.</p>
          </div>
          {isLoaded && (
            <div>
              {width && width > 775 ? (
                <div className="flex justify-center">
                  <YouTube
                    opts={{
                      height: "300",
                      width: "600",
                    }}
                    videoId="7lmWOmyPRqA"
                  />
                </div>
              ) : (
                <div className="flex justify-center">
                  <YouTube
                    opts={{
                      height: "150",
                      width: "250",
                    }}
                    videoId="7lmWOmyPRqA"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default about;
