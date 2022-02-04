import Head from "next/head";
import Image from "next/image";
import ProfileImg from "../assets/profilovka.png";

const practice = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-3 bg-cover p-10 gap-4 2xl:h-[550px] m-4 bg-motive">
        <div className="2xl:col-span-2">
          <p>Absolvované vzdělání a kurzy:</p>
          <ul className="p-4 ml-4 list-disc">
            <li>Mgr. vzdělání v oboru Psychologie, Filosofická fakulta Univerzity Palackého v Olomouci, </li>
            <li>Supervizní psychoterapeutický výcvik v Biosyntéze (doposud frekventantem)., Český institut Biosyntézy z.s,</li>
            <li>Základní psychoterapeutický výcvik v Biosyntéze, Český institut Biosyntézy z.s,</li>
            <li>Kurz Školní psycholog na ZŠ a SŠ, Filosofická fakulta Univerzity Palackého v Olomouci,</li>
            <li>Kurz Základní krizová intervence, Remedium Praha o.p.s a další kurzy.</li>
          </ul>
          <p className="pb-4">Praxe a další činnosti:</p>
          <ul className="p-4 ml-4 list-disc">
            <li>
              psychologické poradenství, krizová intervence a individuální konzultace pro rodiče, učitele a žáky, práce se
              třídními kolektivy (ZŠ Hudcova, Brno),
            </li>
            <li>
              individuální a rodinné poradenství pro mladistvé a jejich rodinné příslušníky, lektorování skupinových setkání
              zaměřených na zvládání agrese u mladistvých (Probační a mediační služba ČR),
            </li>
            <li>
              poradenství pro učitele žáků s ADHD, metodik a lektor preventivních programů pro třídní kolektivy s dětmi s ADHD,
              lektor kurzů sociálně-emočního učení pro děti s ADHD (Centrum pro rodinu a sociální péči, Brno),
            </li>
            <li>vychovatel a školní metodik prevence (ZŠ Babice nad Svitavou) a další praxe.</li>
          </ul>
        </div>
        <div className="self-center">
          <Image placeholder="blur" layout="responsive" objectFit="contain" src={ProfileImg} alt="Profilová fotka" />
        </div>
      </div>
    </div>
  );
};

export default practice;
