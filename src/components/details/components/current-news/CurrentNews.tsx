import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useNews } from "@/api/news/queries";
import { NewsDetails } from "../news-details/NewsDetails";
import { Loader } from "@/components/common/loader/Loader";
import { useArticles } from "@/api/articles/queries";

export const CurrentNews: React.FC = () => {
  const router = useRouter();
  const { isPending, isError, data, error } = useArticles(
    "9 Key Revelations in Maui’s First Review of the Lahaina Inferno"
  );
  console.log(data);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {data ? (
        <NewsDetails article={data} />
      ) : (
        <p>We don't have any news on this request.</p>
      )}
    </>
  );
};
