import { formateDate } from "@/utils/formatter-date";
import { API_BASE_IMG_URL } from "@/constants/variables";
import { ArticleRaw, Article, ArticleImages } from "./types";

export const prepareArticle = (article: ArticleRaw[]): Article | null => {
  if (!article.length) {
    return null;
  }

  const {
    abstract,
    headline,
    pub_date,
    section_name,
    lead_paragraph,
    uri,
    multimedia,
  } = article[0];

  const preparedMultimedia = ((
    multimedia: ArticleImages[]
  ): ArticleImages | null => {
    const necessaryWidth = 1000;

    if (multimedia && multimedia.length) {
      const filterByWidth = multimedia.filter(({ width }) => {
        width >= necessaryWidth;
      });

      return filterByWidth.length ? filterByWidth[0] : multimedia[0];
    }

    return null;
  })(multimedia);

  return {
    abstract,
    title: headline.main,
    date: formateDate(pub_date),
    section: section_name ? section_name : "general",
    paragraph: lead_paragraph,
    uri,
    imgUrl: preparedMultimedia
      ? `${API_BASE_IMG_URL}${preparedMultimedia.url}`
      : "/backgrounds/news.jpg",
    imgAlt:
      preparedMultimedia && preparedMultimedia.caption
        ? preparedMultimedia.caption
        : "news image",
  };
};
