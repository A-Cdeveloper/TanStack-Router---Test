import { Link } from "@tanstack/react-router";
import { News } from "../../types";

const SingleNews = ({ news }: { news: News }) => {
  return (
    <div className="py-1 border-b border-gray-300">
      <h2 className="text-3xl font-bold">
        <Link to={news.id.toString()} preload="intent">
          {news.title}
        </Link>
      </h2>
      <p>{news.body}</p>
    </div>
  );
};

export default SingleNews;
