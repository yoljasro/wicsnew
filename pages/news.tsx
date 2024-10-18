import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import type { NextPage, GetStaticProps } from "next";
import axios from 'axios';
import styles from "../styles/news.module.sass";
import { MainPageTitle } from "../components/MainPageTitle";
import { Button } from "@material-ui/core";

const staticNewsItems = [
  {
    id: "gul",
    imageSrc: "/assets/img/gulfod.png",
    imageAlt: "image",
    title: "Gulfood 2025 – В феврале 2025 года в Дубае пройдет выставка Gulfood ",
    description: "где большое внимание будет уделено халяль-продукции",
    date: "16-oktabr 2024",
  },


  {
    id: "sum",
    imageSrc: "/assets/img/sum.png",
    imageAlt: "image",
    title: "  World Halal Summit  ",
    description: "2024 – В декабре в Индонезии пройдет Всемирный саммит по вопросам халяль-индустрии.",
    date: "14-oktabr 2024",
  },

  {
    id: "expo",
    imageSrc: "/assets/img/expo.png",
    imageAlt: "image",
    title: " Halal Expo Istanbul 2024 – Одна из крупнейших международных выставок",
    description: "посвященных халяль-индустрии, состоится с 26 по 29 октября 2024 года в Стамбуле.",
    date: "11-oktabr 2024",
  },

  {
    id: "conferen",
    imageSrc: "/assets/img/konferensiya.png",
    imageAlt: "image",
    title: "в Ташкенте прошла конференция, посвященная развитию паломнического туризма. 🌙",
    description: "На конференции выступил председатель Всемирного комитета Халяль. ✅",
    date: "11-dekabr 2023",
  },
  {
    id: "national",
    imageSrc: "/assets/img/national.png",
    imageAlt: "image",
    title: "Международная неделя паломнического туризма",
    description: "B рамках Международной недели паломнического туризма 28 ноября текущего года в Бухарской области прошел Национальный гастрономический фестиваль, который привлек путешественников-мусульман из разных стран. Основная цель фестиваля - популяризация потенциала паломнического туризма Узбекистана, на международном уровне через халяльную еду.",
    date: "29-noyabr 2023",
  },
  {
    id: "president",
    imageSrc: "https://worldhalalsummit.com.tr/en/wp-content/uploads/2022/08/BURK0895-1024x683.jpg",
    imageAlt: "image",
    title: "B Турции пройдет Всемирный Халяльный Саммит 2023",
    description: "B Турции. Стамбуле c 25-28 ноября 2023 года.",
    date: "19-sentabr 2023",
  },
  {
    id: "summit",
    imageSrc: "/assets/img/samor.png",
    imageAlt: "image",
    title: "B Ташкенте прошла встреча Президента Всемирного Халяльного Комитета WICS c Президнетом Всемирного Халяльного Саммита WHS",
    description: "Стороны обсудили двухстороннее сотрудничество",
    date: "18-sentabr 2023",
  },
  {
    id: "food",
    imageSrc: "/assets/img/food1.jpg",
    imageAlt: "image",
    title: "XIX благотворительном фестивале культурных традиций и национальной кухни между",
    description: "27 мая 2023 года Ассоциация Поваров Узбекистана приняла участие в традиционном XIX благотворительном фестивале культурных традиций и национальной кухни между дипломатическими представительствами и международными организациями в Центральном саду. 📍Основной целью проведения фестиваля является повышение престижа Узбекистана в зарубежных странах, создание условий для полноценного досуга сотрудников дипломатических представительств, их неформального, дружеского общения, знакомства c культурным наследием разных стран.",
    date: "29-may 2023",
  },
  {
    id: "sign",
    imageSrc: "/assets/img/sign2.png",
    imageAlt: "image",
    title: "Из журнала «под знаком Халяль» Исламские стандарты : тренды и бренды",
    description: "Ренессанс исламских традиций в России породил бум спроса на халяльную продукцию и вал ee производства. A вот полномочиями подтвердить каноническую дозволенность тех или иных продуктов, товаров и услуг c точки зрения Ислама призван действующий c 2004 года при Духовном управлении мусульман Республики Татарстан Комитет по стандарту «Халяль».",
    date: "26-may 2023",
  },
  {
    id: "kazanNews",
    imageSrc: "/assets/img/kazanforum.jpg",
    imageAlt: "image",
    title: "KAZANFORUM International Chefs Cup 2023 by WHS Kazan is the center of world halal cuisine",
    description: "On May 17, the first day of cooking national dishes took place at the KAZANFORUM International Chefs Cup 2023, where each Association from Azerbaijan, Turkey, Uzbekistan, Malaysia and Iran developed a menu of 3 national dishes to be introduced into Kazan restaurants. Each restaurant was dedicated to the national cuisine of one particular country.",
    date: "8-may 2023",
  },
  {
    id: "newsMain",
    imageSrc: "/assets/img/coffee.jpg",
    imageAlt: "image",
    title: "Coffee & Tea Fest 2023 Uzbekistan",
    description: "C 12 по 14 мая на площади Дружбы народов  официальный фестиваль кофе и чая в Узбекистане.☕️ Основная цель фестиваля - Качественное развитие кофейной и чайной индустрии и бизнеса, a также перспектива сотрудничества и обмена опытом от топовых бариста и барменами. Кроме того отдельное внимание будет уделено возрождению и развитию национальных традиций узбекского чаепития.",
    date: "8-may 2023",
  },
];


interface NewsItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;  
  date: string;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let dynamicNewsItems: NewsItem[] = [];

  try {
    const response = await axios.get('https://api.worldhalal.uz/news');
    dynamicNewsItems = response.data.map((item: any) => ({
      id: item._id,
      imageSrc: `https://api.worldhalal.uz/${item.image}`,
      imageAlt: "image",
      title: item.title,
      description: item.description,
      date: item.date,
    }));
  } catch (error) {
    console.error("Error fetching news items: ", error);
  }

  return {
    props: {
      newsItems: [...staticNewsItems, ...dynamicNewsItems],
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};

interface NewsProps {
  newsItems: NewsItem[];
}

const News: NextPage<NewsProps> = ({ newsItems }) => {
  const router = useRouter();

  return (
    <div className={styles.news}>
      <Head>
        <title>Halal News</title>
        <meta name="description" content="Halal.uz Halol sertifikatini beruvchi kompaniya rasmiy web sayti" />
        <meta name="google-site-verification" content="Pi7kisuljjOmFbBlvmk-S8DASJP-WbIGUQ1ERs9XwS4" />
        <link rel="icon" href="/assets/img/logo.svg" />
      </Head>
      <MainPageTitle subtitle="News" description=" Halal News" />
      <div className={styles.news__content}>
        {newsItems.map((news) => (
          <div
            key={news.id}
            onClick={() => {
              router.push(`/news/${news.id}`);
            }}
            className={styles.news__card}
          >
            <Image
              alt={news.imageAlt}
              className={styles.news__image}
              src={news.imageSrc}
              width={500}
              height={350}
            />
            <div>
              <h3 className={styles.news__title}>{news.title}</h3>
              <p className={styles.news__description}>{news.description}</p>
              <p className={styles.news__date}>{news.date}</p>
              <Button className={styles.news__btn} variant="contained">See more</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
