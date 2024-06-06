import Link from "next/link";
import Image from "next/image";
// react
import React, { FC, useState, useEffect } from "react";
// next intl
import { useTranslations } from "next-intl";
// styles
import styles from "../styles/uzbChefs.module.sass";
import { MainPageTitle } from "../components/MainPageTitle";
import { SocialNetworks } from "../components/socialNetworks";
import { Button } from "@mui/material";
import Head from "next/head";
import { GetStaticProps } from "next";
import axios from "axios";

const UzbChefs: FC<any> = ({ props }) => {
  const t = useTranslations();

  const localChefs = [
    {
      nameuz: "Фатхуллахон ТУРАХАНОВ",
      image: "/assets/img/chef1.png",
      instagram: "https://instagram.com/fathullakhan_?igshid=NDk5N2NlZjQ=",
      facebook: "https://www.facebook.com/fathulla.khan.796?mibextid=LQQJ4d",
      telegram: "@Fathullakhan_001",
      certificate: "/assets/documents/fatxulla.pdf",
    },
    {
      nameuz: "Музаффар МИРЗАКАРИМОВ",
      image: "/assets/img/chef2.png",
      instagram: "https://instagram.com/mirzakarimov.muzaffar?",
      facebook: "/",
      telegram: "/",
      certificate: "/assets/documents/muzaffar.pdf",
    },
    {
      nameuz: "Дониёр МАЛИКОВ",
      image: "/assets/img/chef3.png",
      instagram: "https://instagram.com/doniyor_malikovv",
      facebook: "/",
      telegram: "/",
      certificate: "/assets/documents/doniyor.pdf",
    },
    {
      nameuz: "Акмаль МАХМУДОВ",
      image: "/assets/img/chef4.png",
      instagram: "https://instagram.com/chef_akmall?igshid=NDk5N2NlZjQ=",
      facebook: "/",
      telegram: "/",
      certificate: "/assets/documents/akmal.pdf",
    },
    {
      nameuz: "Akhmad Khamdamov",
      image: "/assets/img/command2.png",
      instagram: "https://instagram.com/fathullakhan_?igshid=NDk5N2NlZjQ=",
      facebook: "https://www.facebook.com/fathulla.khan.796?mibextid=LQQJ4d",
      telegram: "@Fathullakhan_001",
      certificate: "/assets/documents/ahmad.pdf",
    },
    {
      nameuz: "Mirbabaev Elyorbek",
      image: "/assets/img/command4.png",
      instagram: "",
      facebook: "/",
      telegram: "/",
      certificate: "/assets/documents/elyor.pdf",
    },
    {
      nameuz: "Ruziboyev Azamat",
      image: "/assets/img/command5.png",
      instagram: "",
      facebook: "/",
      telegram: "/",
      certificate: "/assets/documents/azamat.pdf",
    },
    {
      nameuz: "Davron Razikov",
      image: "/assets/img/razikov.png",
      instagram: "",
      facebook: "/",
      telegram: "/",
      certificate: "/assets/documents/razikov.pdf",
    },
  ];

  const [chefs, setChefs] = useState(localChefs);

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/chefs");
        const data = response.data;
        setChefs((prevChefs) => [...prevChefs, ...data]);
      } catch (error) {
        console.error("Error fetching chefs:", error);
      }
    };

    fetchChefs();
  }, []);

  return (
    <div className={styles.cont}>
      <Head>
        <title>UZB Halal Chefs </title>
        <meta
          name="description"
          content="worldhalal.uz Halol sertifikatini beruvchi kompaniya rasmiy web sayti"
        />
        <meta
          name="google-site-verification"
          content="Pi7kisuljjOmFbBlvmk-S8DASJP-WbIGUQ1ERs9XwS4"
        />
        <link rel="icon" href="/assets/img/logo.svg" />
      </Head>
      <MainPageTitle
        subtitle={t("pageHalalChef.title")}
        description={t("pageHalalChef.information")}
      />
      <div className={styles.cont__chefs}>
        {chefs.map((chef, index) => {
          // Determine if the URL is local or from backend
          const imageUrl = chef.image.startsWith("/")
            ? chef.image
            : `http://localhost:5000${chef.image}`;
          const certificateUrl = chef.certificate.startsWith("/")
            ? chef.certificate
            : `http://localhost:5000${chef.certificate}`;

          return (
            <div key={chef._id || index} className={styles.cont__chefs__card}>
              <Image
                src={imageUrl}
                width={280}
                height={390}
                alt={chef.nameuz || chef.nameuz}
              />
              <div className={index % 2 === 0 ? styles.cont__chefs__card__hoverContent : styles.cont__chefs__card__hoverContent2}>
                <h3>{chef.nameuz || chef.nameuz}</h3>
                <SocialNetworks
                  instagram={chef.instagram}
                  facebook={chef.facebook}
                  telegram={chef.telegram}
                />
                <a target={'_blank'} rel="noreferrer" href={certificateUrl}>
                  <Button className={styles.cont__certificateBtn} variant="contained">
                    {t("pageManufacturers.certificate")}
                  </Button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UzbChefs;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
