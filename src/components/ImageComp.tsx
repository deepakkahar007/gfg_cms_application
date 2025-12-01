import Image from "next/image";

const ImageComp = ({ url }: { url: string }) => {
  return (
    <Image
      src={url}
      alt="Image"
      loading="lazy"
      fill
      priority={false}
      sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
      className="object-cover"
    />
  );
};

export default ImageComp;
