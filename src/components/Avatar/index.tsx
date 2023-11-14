"use client";

type AvatarProp = {
  avatar: string;
};

const Avatar = ({ avatar }: AvatarProp) => {
  return (
    <div className="w-[3.125rem] h-[3.125rem] rounded-[3.125rem]">
      <img src={avatar} alt="" />
    </div>
  );
};

export default Avatar;
