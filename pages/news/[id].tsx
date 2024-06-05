import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import axios from 'axios';
import styles from "../../styles/news.module.sass";

interface NewsDetailProps {
  newsItem: {
    id: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    date: string;
  } | null;
}

const NewsDetail: NextPage<NewsDetailProps> = ({ newsItem }) => {
  if (!newsItem) {
    return (
      <div className={styles.newsDetail}>
        <Head>
          <title>News not found</title>
          <meta name="description" content="News item not found" />
        </Head>
        <div className={styles.news__content}>
          <h1>News item not found</h1>
          <p>Sorry, the news item you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.newsDetail}>
      <Head>
        <title>{newsItem.title}</title>
        <meta name="description" content={newsItem.description} />
      </Head>
      <div className={styles.news__content}>
        <h1>{newsItem.title}</h1>
        <Image
          alt={newsItem.imageAlt}
          src={newsItem.imageSrc}
          width={800}
          height={600}
        />
        <p>{newsItem.description}</p>
        <p>{newsItem.date}</p>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get('http://localhost:5000/news');
  const newsItems = response.data;

  const paths = newsItems.map((item: any) => ({
    params: { id: item._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  let newsItem = null;
  let messages = null;

  try {
    const [newsResponse, messagesResponse] = await Promise.all([
      axios.get(`http://localhost:5000/news/${id}`),
      import(`../../messages/${context.locale}.json`).then((res) => res.default),
    ]);

    newsItem = {
      id: newsResponse.data._id,
      imageSrc: `http://localhost:5000${newsResponse.data.image}`,
      imageAlt: "image",
      title: newsResponse.data.title,
      description: newsResponse.data.description,
      date: newsResponse.data.date,
    };
    messages = messagesResponse;
  } catch (error) {
    console.error("Error fetching news item: ", error);
  }

  return {
    props: {
      newsItem,
      messages,
    },
  };
};

export default NewsDetail;
