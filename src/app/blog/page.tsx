import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { fetchRSSFeed } from "@/lib/rss-feed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Market Insights & News | Las Vegas Real Estate Blog",
  description:
    "Stay informed with the latest Las Vegas real estate market news, buying tips, market trends, and insights from Simplifying the Market to help you make informed homebuying decisions.",
};

const Blog = async () => {
  const rssBlogs = await fetchRSSFeed();

  return (
    <>
      <Breadcrumb
        pageName="Market Insights"
        description="Stay informed with the latest real estate market news, buying tips, and market trends to help you make informed decisions."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          {rssBlogs.length > 0 ? (
            <>
              <div className="-mx-4 flex flex-wrap justify-center">
                {rssBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                  >
                    <SingleBlog blog={blog} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center text-body-color dark:text-body-color-dark">
              <p className="text-lg">Loading market insights...</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
