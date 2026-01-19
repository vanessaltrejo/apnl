import Image from 'next/image';

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, excerpt, imageUrl, date, author }) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative w-full h-48">
        <Image 
          src={imageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-dark-blue mb-2">{title}</h3>
        <p className="text-gray-600 text-base flex-grow mb-4">{excerpt}</p>
        <div className="text-sm text-gray-500 mt-auto">
          <span>{author}</span> | <span>{date}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
