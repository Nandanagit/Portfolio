import Button from "./Button";

export default function ResumeSection() {
  return (
    <section className="max-w-2xl mx-auto my-16 px-4 text-center" id="resume">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Resume</h2>
      <Button
        href="/NANDANA-P_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4"
      >
        View Resume
      </Button>
      
    </section>
  );
}
