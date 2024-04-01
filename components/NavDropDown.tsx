"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function NavDropDown({ navlocale }: { navlocale: string }) {
  const [locale, setLocale] = useState<string>(navlocale);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (selectedLocale: string) => {
    const redirectUrl = pathname.replace(`/${locale}`, `/${selectedLocale}`);
    router.push(redirectUrl);
    setLocale(selectedLocale);
    setIsOpen(false);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2"
        >
          <Image
            className="max-w-8"
            src={
              locale === "en"
                ? "/assets/images/usa.png"
                : "/assets/images/bd.png"
            }
            alt="bangla"
            width={32}
            height={32}
          />
          {locale === "bn" ? "Bangla" : "English"}
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
            <li
              onClick={() => handleChange("bn")}
              className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            >
              <Image
                className="max-w-8"
                src="/assets/images/bd.png"
                alt="bangla"
                width={32}
                height={32}
              />
              Bangla
            </li>
            <li
              onClick={() => handleChange("en")}
              className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            >
              <Image
                className="max-w-8"
                src="/assets/images/usa.png"
                alt="bangla"
                width={32}
                height={32}
              />
              English
            </li>
          </div>
        )}
      </div>
    </div>
  );
}
