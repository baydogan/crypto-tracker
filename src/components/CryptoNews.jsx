//helper fonksiyonlar
import { convertTime } from "../helpers/index";

//harici kütüphane
import { ExternalLink } from "react-external-link";

const Cryptonews = ({ article }) => {
  return (
    <div className="bg-white dark:bg-slate-800 dark:border-slate-800 transition-all duration-300 overflow-hidden border shadow-md border-gray-100  w-4/5  mt-2 mx-auto">
      <img src={article.urlToImage} alt="" />
      <div className="p-4 md:p-6">
        <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">{article.author}</p>
        <ExternalLink href={article.url}>
          <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal cursor-pointer h-18 md:h-24 dark:text-white">
            {article.title}
          </h3>
        </ExternalLink>
        <div className="text-sm flex items-center">
          <p className="leading-none dark:text-white">{convertTime(article.publishedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cryptonews;
