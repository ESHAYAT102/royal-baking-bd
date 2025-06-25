import { Link } from "react-router-dom";
import matter from "gray-matter";

export default function BlogListPage() {
  const postModules = import.meta.glob("/src/posts/*.md", {
    as: "raw",
    eager: true,
  });

  const postList = Object.entries(postModules).map(([path, rawContent]) => {
    const slug = path.split("/").pop().replace(".md", "");
    const { data } = matter(rawContent);
    return {
      slug,
      title: data.title || slug.replace(/-/g, " "),
    };
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid gap-6">
        {postList.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.slug}
            className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
          >
            <h2 className="text-2xl font-bold capitalize">{post.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
