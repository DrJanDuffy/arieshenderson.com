import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { fetchRSSFeed } from "@/lib/rss-feed";

const Blog = async () => {
  const rssBlogs = await fetchRSSFeed();

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Latest Market Insights"
          paragraph="Stay informed with the latest real estate market news, buying tips, and market trends to help you make informed decisions."
          center
        />

        {rssBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {rssBlogs.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-body-color dark:text-body-color-dark">
            <p>Loading market insights...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
