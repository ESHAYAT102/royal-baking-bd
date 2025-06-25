import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Animate from "../components/ui/Animate";

const MarkdownComponents = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    const lang = match
      ? match[1].charAt(0).toUpperCase() + match[1].slice(1)
      : null;
    return !inline && match ? (
      <div className="my-6 rounded-md border bg-[#0d1117] text-sm text-white">
        <div className="flex items-center justify-between rounded-t-md border-b bg-[#161b22] px-4 py-2">
          <p>{lang || "Code"}</p>
        </div>
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          {...props}
          customStyle={{
            margin: 0,
            padding: "1rem",
            backgroundColor: "#0d1117",
          }}
          codeTagProps={{
            style: {
              fontFamily: "inherit",
            },
          }}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  h1: ({ children, ...props }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-3xl font-bold mt-6 mb-3" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-2xl font-semibold mt-4 mb-2" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-xl font-semibold mt-3 mb-2" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 className="text-lg font-semibold mt-2 mb-1" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6 className="text-base font-semibold mt-2 mb-1" {...props}>
      {children}
    </h6>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-disc pl-5 my-4" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal pl-5 my-4" {...props}>
      {children}
    </ol>
  ),
  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-gray-50" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody className="bg-white divide-y divide-gray-200" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }) => <tr {...props}>{children}</tr>,
  th: ({ children, ...props }) => (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" {...props}>
      {children}
    </td>
  ),
  li: ({ children, ...props }) => (
    <li className="mb-2" {...props}>
      {children}
    </li>
  ),
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState({ content: "", data: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const rawPost = await import(`../posts/${slug}.md?raw`);
        const { content, data } = matter(rawPost.default);
        setPost({ content, data });
      } catch (e) {
        setError("Post not found.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Loading post...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">{error}</h1>
        <Link to="/blog" className="text-blue-500 hover:underline">
          Back to Blog List
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          {post.data.title}
        </h1>
        <p className="mt-4 text-lg text-gray-500">{post.data.date}</p>
      </div>
      <Animate distance={100} direction="vertical" duration={1} initialOpacity={0} delay={0.2}>
        <article className="prose lg:prose-xl mx-auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={MarkdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </Animate>
    </div>
  );
}
