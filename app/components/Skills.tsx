const skillGroups = [
    { title: 'Languages & Frameworks', items: ['Go', 'Python', 'Node.js', 'C#'] },
    { title: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { title: 'Cloud & DevOps', items: ['AWS EC2', 'RDS', 'S3', 'SES', 'Docker', 'Kubernetes'] },
    { title: 'Tools & Practices', items: ['REST APIs', 'JWT/OAuth2', 'TDD', 'Agile/Scrum'] },
  ];
  
  export default function Skills() {
    return (
      <section className="py-16" id="skills">
        <h2 className="text-3xl font-semibold mb-8">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-2">{group.title}</h3>
              <ul className="list-disc list-inside">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }