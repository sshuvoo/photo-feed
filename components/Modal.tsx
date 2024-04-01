"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Children {
  children: React.ReactNode;
}

export default function Modal({ children }: Children) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
      <div className="bg-white relative">
        <Image
          onClick={handleClose}
          className="absolute right-1 top-1 cursor-pointer"
          src={"/assets/close-button.png"}
          alt="close-icon"
          width={35}
          height={35}
        />
        {children}
      </div>
    </div>
  );
}
