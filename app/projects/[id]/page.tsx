// app/projects/[id]/page.tsx
import { notFound } from 'next/navigation'
import { projects } from '../../../src/lib/projects'

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ProjectDetail({ params }: any) {
  const project = projects.find((p) => p.id === params.id)
  if (!project) notFound()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p>{project.description}</p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-primary hover:bg-primary-700 text-white rounded-md transition"
        >
          View Project
        </a>
      )}

      <h3 className="font-semibold">Technologies</h3>
      <ul className="list-disc list-inside">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <h3 className="font-semibold">Key Metrics</h3>
      <ul className="list-disc list-inside">
        {project.metrics.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  )
}