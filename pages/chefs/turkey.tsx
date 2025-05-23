// next components
import Link from "next/link";
import Image from "next/image";
// nuka carousel
// react
import React, { FC, ChangeEventHandler, useState, useEffect } from "react";
// next intl
import { useTranslations } from "next-intl";
// router
import { useRouter } from "next/router";
// styles
import styles from "../../styles/azerbajan.module.sass";
import { MainPageTitle } from "../../components/MainPageTitle";
import { SocialNetworks } from "../../components/socialNetworks";
import { Button } from "@mui/material";
import Head from "next/head";
import { GetStaticProps } from "next";

const Turkey: FC<any> = ({ props }) => {
  const t = useTranslations();

  return (
    <div className={styles.cont}>
      <Head>
        <title>Turkey Halal Chefs </title>
        <meta
          name="description"
          content="Halal.uz Halol sertifikatini beruvchi kompaniya rasmiy web sayti"
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

      <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/pidrprezident.jpg"
            width={280}
            height={390}
            alt="chef1"
          />
          <div className={styles.cont__chefs__card__hoverContent}>
            <h3>Oner Gulfas</h3>
            <SocialNetworks
              instagram=" /"
              facebook="/"
              telegram="/"
            />
            <a target={'_blank'} rel="noreferrer" href="/assets/documents/biralmis.pdf">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </a>
          </div>
        </div>

      <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/ttt.jpg"
            width={280}
            height={390}
            alt="chef1"
          />
          <div className={styles.cont__chefs__card__hoverContent}>
            <h3>Umar and  Bilal</h3>
            <SocialNetworks
              instagram=" /"
              facebook="/"
              telegram="/"
            />
            <a target={'_blank'} rel="noreferrer" href="/assets/documents/biralmis.pdf">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/biralmis.jpeg"
            width={280}
            height={390}
            alt="chef1"
          />
          <div className={styles.cont__chefs__card__hoverContent}>
            <h3>Ahmet Biralmis</h3>
            <SocialNetworks
              instagram=" /"
              facebook="/"
              telegram="/"
            />
            <a target={'_blank'} rel="noreferrer" href="/assets/documents/biralmis.pdf">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/bayram.jpg"
            width={280}
            height={390}
            alt="chef2"
          />

          <div className={styles.cont__chefs__card__hoverContent2}>
            <h3>Bayram Ozrek</h3>
            <SocialNetworks
              instagram="/"
              facebook="/"
              telegram="/"
            />
            <Link target={'_blank'} rel="noreferrer" href="/">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </Link>
          </div>
        </div>

        <div className={styles.cont__chefs__card}>
          <Image
            src="/assets/img/cheff_mens.png"
            width={280}
            height={390}
            alt="chef2"
          />

          <div className={styles.cont__chefs__card__hoverContent2}>
            <h3>Hudaverdi Akgun </h3>
            <SocialNetworks
              instagram="/"
              facebook="/"
              telegram="/"
            />
            <a target={'_blank'} rel="noreferrer" href="/assets/documents/hudayverdi.pdf">
              <Button className={styles.cont__certificateBtn} variant="contained">
                {t("pageManufacturers.certificate")}
              </Button>
            </a>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default Turkey;


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  }
}

