import ImageComp from "./ImageComp";

type RecentPostCardPropsType = {
  image_url: string;
  category: string;
  title: string;
  author: string;
  date: string;
};

const RecentPostCard = ({
  title,
  author,
  category,
  date,
  image_url,
}: RecentPostCardPropsType) => {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <div className="absolute inset-0 transform transition-transform duration-300 group-hover:scale-105">
          <ImageComp url={image_url} />
        </div>
      </div>

      <div>
        <p className="text-primary text-sm font-medium">{category}</p>

        <p className="text-white text-lg font-bold mt-1 group-hover:text-primary transition-colors">
          {title}
        </p>

        <p className="text-neutral-400 text-sm mt-1">
          By {author} • {date}
        </p>
      </div>
    </div>
  );
};

export default RecentPostCard;
