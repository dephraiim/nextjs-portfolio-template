import Link from "next/link";

export default function FeaturedWorkCard({
  category,
  title,
  description,
  id,
}) {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <div className="p-5">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <div
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            {category}
          </div>
        </p>
        <Link href={id ? `/blog/${id}` : "/projects"}>
          <a
            aria-label="Category"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            {title}
          </a>
        </Link>
        <p className="mb-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
}
