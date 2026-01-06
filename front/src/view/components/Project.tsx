
interface ProjectProps {
  title: string;
  description: string;
  link: string;
  forks_count: number;
  stars: number;

  createdAt: string
  language: string

}
import { ArrowUpRight } from 'lucide-react';
import { formatDate } from '../../app/utils/formatDate';
import { truncateText } from '../../app/utils/truncateText';

export function Project({
  description,
  title,
  link,
  language,
  forks_count,
  stars,
  createdAt
}: ProjectProps) {
  return (
    <a href={link} target='_blank' rel="noopener noreferrer" className="block h-full">
      <div className="flex flex-col h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="md:text-xl  flex items-center gap-2 text-primary mb-2 justify-between">
              <div className='flex items-center gap-2 font-bold'>

                {truncateText(title, 17)}
                <span className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>

              <span className='text-xs text-secondary/70'>Criado em {formatDate(new Date(createdAt))}</span>
            </div>
            <p className="text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
              {description}
            </p>
          </div>
          <div>

            {language && (
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-secondary bg-border/30 px-2 py-1 rounded-full">
                  {language}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-secondary">⭐ {stars}</span>
                  <span className="text-xs text-secondary">🔀 {forks_count || 0}</span>
                </div>
              </div>
            )}
          </div>

        </div>


      </div>
    </a>
  );
}