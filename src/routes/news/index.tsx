import { createFileRoute } from "@tanstack/react-router";
import Error from "../../components/layout/Error";
import Loading from "../../components/layout/Loading";
import SingleNews from "../../components/news/SingleNews";
import { getNews } from "../../utils";

export const Route = createFileRoute("/news/")({
  component: PostsPage,
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData({
      queryKey: ["news"],
      queryFn: getNews,
    });
  },
  pendingComponent: Loading,
  errorComponent: Error,
});

//////////////////////////////////////////
function PostsPage() {
  const data = Route.useLoaderData();
  return (
    <div>
      {data.map((news) => (
        <SingleNews key={news.id} news={news} />
      ))}
    </div>
  );
}
