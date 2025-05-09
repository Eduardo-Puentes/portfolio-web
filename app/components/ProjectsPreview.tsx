import Link from 'next/link';
import { projects } from '../../src/lib/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsPreview() {
  const preview = projects.slice(0, 3);
  return (
    <section className="py-16" id="projects">
      <h2 className="text-3xl font-semibold mb-6">Selected Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {preview.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link className="text-blue-600 hover:underline" href="/projects">
          View All Projects →
        </Link>
      </div>
    </section>
  );
}