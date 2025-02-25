
interface BadgesProps {
  title: string;
  icon: React.ReactNode;
}

export function Badges({title,icon}:BadgesProps) {
  return (
    <div className=" flex text-xs md:text-sm gap-2 items-center justify-center text-white border border-gray-500 rounded-full px-2 py-1 bg-slate-800/50 ">
      {icon}
      {title}
    </div>
  );
}