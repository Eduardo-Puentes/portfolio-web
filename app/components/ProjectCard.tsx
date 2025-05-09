import Link from 'next/link';
import { Project } from '../../src/lib/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="block p-6 border rounded-lg hover:shadow-lg transition" href={`/projects/${project.id}`}>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm mb-2">{project.description}</p>
    </Link>
  );
}