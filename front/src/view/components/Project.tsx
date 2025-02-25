
interface ProjectProps {
  title: string;
  description: string;
  link: string;
  stars: number;
  createdAt:string
}
import { formatDate } from '../../app/utils/formatDate';

export function Project({
  description,
  title,
  link,
  stars,
  createdAt
}: ProjectProps) {
  return (
    <a href={link}>
      <div className=" group  flex items-center gap-2 md:gap-6 hover:bg-[rgba(148,163,184,0.1)] px-6 pt-6 pb-2 rounded-lg shadow-lg w-full max-w-2xl transition-all ">
        
        <div className=" flex-col text-white flex-wrap">
          <div className="md:text-lg font-semibold flex items-center gap-1 text-base">
            {title}
            <span className=" group-hover:text-[#56ecb5] group-hover:translate-x-2 group-hover:-translate-y-2 transition-all">
              ↗
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-1 line-clamp-none md:line-clamp-3 ">
            {description}
          </p>

          <div className="mt-2 flex flex-col gap-2 ">
            <span className="text-gray-300 text-sm">⭐ {stars}</span>

            <div className="flex gap-2 flex-wrap justify-center items-end  ">
              <span className=" text-slate-500  text-xs px-3 py-1 rounded-full">
                Criado em {formatDate(new Date(createdAt))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}