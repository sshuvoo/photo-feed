import Modal from "@/components/Modal";
import { findById } from "@/database";
import { getDictionary } from "@/dictionaries";
import Image from "next/image";

type Params = {
  locale: string;
  photoId: string;
};

export default async function PhotoDetails({
  params: { locale, photoId },
}: {
  params: Params;
}) {
  const photo = await findById(photoId);
  const { views, share, uploaded, follow, followers, save } =
    await getDictionary(locale);
  return (
    <Modal>
      <div className="container my-4 lg:my-8">
        <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
          <div className="col-span-12 lg:col-span-8 border rounded-xl">
            {photo && (
              <Image
                className="max-w-full h-full max-h-[70vh] mx-auto object-contain"
                src={photo.url}
                alt={photo.title}
                width={1080}
                height={1080}
              />
            )}
          </div>
          <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
            <h2 className="text-lg lg:text-2xl font-bold mb-2">
              {photo?.title}
            </h2>
            <div className="text-xs lg:text-sm text-black/60 mb-6">
              {photo?.tags.map((tag) => `#${tag}`).join(", ")}
            </div>
            <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
              <div className="flex justify-between">
                <span>{views}</span>
                <span className="font-bold">{photo?.views}</span>
              </div>
              <div className="flex justify-between">
                <span>{share}</span>
                <span className="font-bold">{photo?.share}</span>
              </div>
              <div className="flex justify-between">
                <span>{uploaded}</span>
                <span className="font-bold">{photo?.uploaded}</span>
                {/* 31 January 2024 */}
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  {photo && (
                    <Image
                      className="size-12 lg:size-14 rounded-full border"
                      src={photo.author.avatar}
                      alt={`avatar - ${photo?.author.name}`}
                      width={1080}
                      height={1080}
                    />
                  )}
                  <div className="spacy-y-3">
                    <h6 className="lg:text-lg font-bold">
                      {photo?.author.name}
                    </h6>
                    <p className="text-black/60 text-xs lg:text-sm">
                      {photo?.author.followers} {followers}
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                  <Image
                    src="/assets/icons/follow.svg"
                    alt="followIcon"
                    className="w-5 h-5"
                    width={20}
                    height={20}
                  />
                  {follow}
                </button>
              </div>
              <p className="text-xs lg:text-sm text-black/60">
                {photo?.author.bio}
              </p>
            </div>
            <div className="mt-6">
              <div className="flex items-stretch gap-3">
                <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                  <Image
                    src="/assets/icons/heart.svg"
                    alt="heart-Icon"
                    className="w-5 h-5"
                    width={20}
                    height={20}
                  />
                  100
                </button>
                <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                  <Image
                    src="/assets/icons/save.svg"
                    alt="save-Icon"
                    className="w-5 h-5"
                    width={20}
                    height={20}
                  />
                  {save}
                </button>
                <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                  <Image
                    src="/assets/icons/share.svg"
                    alt="share-Icon"
                    className="w-5 h-5"
                    width={20}
                    height={20}
                  />
                  {share}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
