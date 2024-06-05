import Link from "next/link";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "../styles/restaurants.module.sass";
import { MainPageTitle } from "../components/MainPageTitle";
import { Button } from "@mui/material";
import axios from "axios";
import { GetStaticProps } from "next";

const Restaurants: FC<any> = () => {
  const t = useTranslations();
  const [restaurantsData, setRestaurantsData] = useState([]);

  // useEffect to fetch data from backend and merge with existing data
  useEffect(() => {
    const fetchRestaurantsData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/res");
        if (response.status === 200) {
          const backendData = response.data;
          // Merge backendData with existing restaurantsData
          setRestaurantsData((prevData) => [...prevData, ...backendData]);
        } else {
          console.error("Failed to fetch data from backend");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRestaurantsData();
  }, []);

  // Avvaldan bor ma'lumotlar
  const existingRestaurants = [
    {
      name: "KHAN AHMAD",
      imageSrc: "/assets/img/xanAhmad.png",
      logoSrc: "/assets/img/xanAhmad2.png",
      descriptionKey: "pageRestaurants.ahmad",
      certificatePdf: "/assets/documents/ahmad.pdf",
      instagramUrl: "https://www.instagram.com/khanahmad_restaurant/?igshid=NDk5N2NlZjQ%3D",
      facebookUrl: "https://www.facebook.com/profile.php?id=100054751930596&mibextid=LQQJ4d",
      telegramUrl: "https://t.me/KhanAhmad_restaurant"
    },
    {
      name: "AppexPizza",
      imageSrc: "/assets/img/appex.png",
      logoSrc: "/assets/img/apexpizza2.png",
      descriptionKey: "pageRestaurants.appex",
      certificatePdf: "/assets/documents/appex.pdf",
      instagramUrl: "https://www.instagram.com/apexpizza.uz/?igshid=NDk5N2NlZjQ%3D",
      facebookUrl: "https://www.facebook.com/apexpizza.uz?mibextid=LQQJ4d",
      telegramUrl: "/"
    },
    {
      name: "Sariq Bola",
      imageSrc: "/assets/img/sarikbola.png",
      logoSrc: "/assets/img/sarikbola2.png",
      descriptionKey: "pageRestaurants.sariq",
      certificatePdf: "/assets/documents/sariq.pdf",
      instagramUrl: "https://www.instagram.com/sariqbola_pizza/?igshid=NDk5N2NlZjQ%3D",
      facebookUrl: "https://www.facebook.com/sariqbolapizza/?mibextid=LQQJ4d",
      telegramUrl: "/"
    },
    {
      name: "Shashlik Uz",
      imageSrc: "/assets/img/shashlik.png",
      logoSrc: "/assets/img/shashlikk.png",
      descriptionKey: "pageRestaurants.shashlik",
      certificatePdf: "/assets/documents/shashlik.pdf",
      instagramUrl: "https://www.instagram.com/shashlikuz/?igshid=NDk5N2NlZjQ%3D",
      facebookUrl: "https://www.facebook.com/shashlikuz1?mibextid=LQQJ4d",
      telegramUrl: "https://t.me/shashlikuz_group"
    },
    {
      name: "Nihol",
      imageSrc: "/assets/img/nihal0.png",
      logoSrc: "/assets/img/nihal.png",
      descriptionKey: "pageRestaurants.nihol",
      certificatePdf: "/assets/documents/nihol.pdf",
      instagramUrl: "https://www.instagram.com/nihol_cafe",
      facebookUrl: "https://www.facebook.com/Nihol.cafe/",
      telegramUrl: "https://t.me/niholcafee"
    },
    {
      name: "Karadeniz",
      imageSrc: "/assets/img/karadenizz.png",
      logoSrc: "/assets/img/karadenizlogo.jpg",
      descriptionKey: "pageRestaurants.karadeniz",
      certificatePdf: "/assets/documents/karadeniz.pdf",
      instagramUrl: "https://www.instagram.com/karadeniz.uz/",
      facebookUrl: "https://www.facebook.com/karadeniz.uz/",
      telegramUrl: "https://t.me/karadeniz_restaurant"
    },
    {
      name: "Mahmud Kebab",
      imageSrc: "/assets/img/kebab.png",
      logoSrc: "/assets/img/logoMahmud.jpg",
      descriptionKey: "pageRestaurants.mahmud",
      certificatePdf: "/assets/documents/mahmudKebab.pdf",
      instagramUrl: "https://www.instagram.com/mahmoodkabob/",
      facebookUrl: "https://www.facebook.com/mahmoodkabob/",
      telegramUrl: "https://t.me/mahmoodkabob_bot"
    },
  ];

  return (
    <div className={styles.restaurants}>
      <MainPageTitle
        subtitle={t("pageRestaurants.title")}
        description={t("pageRestaurants.information")}
      />
      <div className={styles.restaurants__cont}>
        {[...existingRestaurants, ...restaurantsData].map((restaurant, index) => (
          <div key={index} className={styles.restaurants__card}>
            <Image
              src={restaurant.imageSrc}
              width={600}
              height={330}
              alt="image"
            />
            <div className={styles.restaurants__logo}>
              <Image src={restaurant.logoSrc} alt="logo" width={100} height={100} />
            </div>
            <div className={styles.restaurants__content}>
              <h1 className={styles.restaurants__title}>{restaurant.name}</h1>
              <p className={styles.restaurants__description}>
                {t(restaurant.descriptionKey)}
              </p>
              <Button variant="contained" className={styles.restaurants__certificateBtn}>
                <a rel="noreferrer" target="_blank" href={restaurant.certificatePdf}>
                  {t("pageManufacturers.certificate")}
                </a>
              </Button>
              <div className={styles.restaurants__socialNetworks}>
                <a rel="noreferrer" target="_blank" href={restaurant.instagramUrl}>
                  <Image src={"/assets/img/instagram.png"} width={45} height={45} alt="instagram" />
                </a>
                <a rel="noreferrer" target="_blank" href={restaurant.facebookUrl}>
                  <Image src={"/assets/img/facebook.png"} alt="facebook" width={45} height={45} />
                </a>
                <a rel="noreferrer" target="_blank" href={restaurant.telegramUrl}>
                  <Image src={"/assets/img/telegram.png"} alt="telegram" width={45} height={45} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.restaurants__moreBtn}>
        <Link href="/nav">
          <Button variant="contained">{t("btnMore")}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Restaurants;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
