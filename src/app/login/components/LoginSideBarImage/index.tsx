"use client";
import imagemLogin from "@/assets/Rectangle5.jpg";

export default function LoginSidebarImage() {
  return (
    <div className="hidden lg:block lg:w-[480px] bg-black">
      <img
        src={imagemLogin.src}
        alt="Maos unidas"
        className="object-cover h-full w-full"
      />
    </div>
  );
}
