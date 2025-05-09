import Link from 'next/link';
import { projects } from '../../src/lib/projects';

export default function ProjectsPage() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <Link  className="block p-6 border rounded-lg hover:shadow-lg transition" key={p.id} href={`/projects/${p.id}`}>
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-sm mb-2">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
        </Link>
      ))}
    </div>
  );
}