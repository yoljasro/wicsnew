
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
import styles from "../../styles/tunis.module.sass";
import { MainPageTitle } from "../../components/MainPageTitle";
import { SocialNetworks } from "../../components/socialNetworks";
import { Button } from "@mui/material";
import Head from "next/head";
import { GetStaticProps } from "next";

const Tunis: FC<any> = ({ props }) => {
    const t = useTranslations();

    return (
        <div className={styles.cont}>
            <Head>
                <title>Azerbajan Halal Chefs </title>
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
                        src="/assets/img/otherchef4.jpeg"
                        width={280}
                        height={390}
                        alt="chef2"
                    /> 

                    <div className={styles.cont__chefs__card__hoverContent2}>
                        <h3>Elchin Mamadov</h3>
                        <SocialNetworks
                            instagram="/"
                            facebook="/"
                            telegram="/"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tunis;


export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default
        }
    }
}

