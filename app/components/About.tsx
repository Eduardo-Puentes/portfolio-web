export default function About() {
    return (
      <section className="py-16" id="about">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="mb-4">
          Aspiring Backend Software Engineer with over 2 years of experience designing and implementing scalable RESTful APIs in Go,
          Python (FastAPI), and Node.js. Strong background in AWS services, Docker, Kubernetes, and CI/CD pipelines.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold">2+</p>
            <p>Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">10K+</p>
            <p>API Requests/Day</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">AWS</p>
            <p>EC2 · RDS · S3 · SES</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">Docker</p>
            <p>CI/CD Pipelines</p>
          </div>
        </div>
      </section>
    );
  }