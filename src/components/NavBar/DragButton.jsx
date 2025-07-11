import Link from "next/link";

const DragButton = ({ title, children, link,onClick }) => {
  return (
    <Link
      href={link} onClick={onClick}
      className="w-full h-full flex p-4 rounded-lg cursor-pointer bg-defult hover:bg-defult-6 flex-col justify-center items-center align-middle transition-all delay-300"
    >
      <div className="flex justify-center items-center p-2 mx-auto mb-2  bg-white rounded-full w-[60px] h-[60px] ">
        {children}
      </div>
      <div className="font-medium text-center text-white text-sm sm:text-[17px]">
        {title}
      </div>
    </Link>
  );
};

export default DragButton;