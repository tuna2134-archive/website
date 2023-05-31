import data from './data.json';
import Link from 'next/link';

export interface Work {
  name: string;
  url: string;
  description: string;
}

export function Work({ count }: { count: number | null }) {
  let works: Work[] = [];
  if (count !== null) {
    works = data.slice(0, count);
  } else {
    works = data;
  }
  return (
    <div className="w-full max-w-xl mx-auto pt-7">
      <h2 className="text-3xl font-bold pl-2">Work</h2>
      <div className="pt-3 grid grid-cols-2">
        {works.map((work: Work, index: number) => (
          <div key={index} className="pt-3 py-4">
            <Link className="text-xl font-semibold hover:text-indigo-400" href={work.url}>{work.name}</Link>
            <div className="pt-6">
              <span>{work.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div> 
  )
}