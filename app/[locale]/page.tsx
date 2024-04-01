import { find } from "@/database";
import Image from "next/image";
import Link from "next/link";

type Params = {
  locale: string;
};

export default async function Home({ params: { locale } }: { params: Params }) {
  const photos = await find();

  return (
    <div className="container my-4 lg:my-8">
      <div className="img-grid">
        {photos.map(({ id, title, url }) => (
          <Link key={id} href={`/${locale}/photos/${id}`} className="group">
            <Image src={url} alt={title} width={1080} height={1080} />
            <div className="title-container">
              <h4 className="title">{title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
