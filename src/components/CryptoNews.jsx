import { convertTime } from "../helpers/index";
import { ExternalLink } from "react-external-link";

const Cryptonews = ({ article }) => {
  return (
    <div class="bg-white overflow-hidden border shadow-md border-gray-100  w-4/5  mt-2 mx-auto">
      <img src={article.urlToImage} alt="" />
      <div class="p-4 md:p-6">
        <p class="text-blue-500 font-semibold text-xs mb-1 leading-none">{article.author}</p>
        <ExternalLink href={article.url}>
          <h3 class="font-semibold mb-2 text-xl leading-tight sm:leading-normal cursor-pointer h-18 md:h-24">
            {article.title}
          </h3>
        </ExternalLink>
        <div class="text-sm flex items-center">
          <p class="leading-none">{convertTime(article.publishedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cryptonews;
