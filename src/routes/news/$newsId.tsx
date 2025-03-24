import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getAuthor, getSingleNews } from "../../utils";

export const Route = createFileRoute("/news/$newsId")({
  component: SingleNewsComponent,
  loader: async ({ context: { queryClient }, params }) => {
    const { newsId } = params;

    // Fetch only news in the loader
    const news = await queryClient.ensureQueryData({
      queryKey: ["news", newsId],
      queryFn: () => getSingleNews(+newsId),
    });

    return { news }; // Do not fetch author yet
  },
});

function SingleNewsComponent() {
  const { news } = Route.useLoaderData();

  // Fetch author separately in the component
  const { data: author, isLoading: authorLoading } = useQuery({
    queryKey: ["author", news.authorId],
    queryFn: () => getAuthor(news.authorId),
    enabled: !!news.authorId, // Only fetch when authorId is available
  });

  return (
    <div>
      {authorLoading ? (
        <p>Loading author...</p>
      ) : (
        <h1 className="text-3xl font-bold">Author: {author?.fullName}</h1>
      )}
      <h1 className="text-5xl font-bold">{news.title}</h1>
      <p>{news.body}</p>
    </div>
  );
}
