// app/resume/page.tsx
export default function ResumePage() {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto px-4 md:px-0 w-full md:w-[70%]">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Resume</h1>
  
          {/* Embed only page 1, hide toolbar/navpanes/scrollbar */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <object
              data="/resume/Eduardo-Puentes-Resume.pdf#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0"
              type="application/pdf"
              width="100%"
              height="800px"
            >
              {/* Fallback if embedding fails */}
              <p className="p-4 text-gray-700 dark:text-gray-300">
                Your browser doesn’t support embedded PDFs.{' '}
                <a
                  href="/resume/Eduardo-Puentes-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 dark:text-primary-300 hover:underline"
                >
                  Download the PDF
                </a>
                .
              </p>
            </object>
          </div>
  
          {/* Download button */}
          <div className="mt-6 text-center">
            <a
              href="/resume/Eduardo-Puentes-Resume.pdf"
              download="Eduardo-Puentes-Resume.pdf"
              className="inline-block px-6 py-3 bg-primary-700 text-white font-medium rounded-lg shadow hover:bg-primary-800 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    );
  }