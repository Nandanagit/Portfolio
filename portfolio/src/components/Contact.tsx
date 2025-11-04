import ContactSection from "./ContactSection";

export default function Contact() {
  return (
    <ContactSection>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Contact</h2>
      <div className="flex flex-col items-center gap-2 text-lg">
        <a href="mailto:nandanakamundayil@gmail.com" className="hover:underline">nandanakamundayil@gmail.com</a>
        <a href="https://www.linkedin.com/in/nandanapradeep/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          linkedin.com/in/nandanapradeep/
        </a>
        <a href="https://github.com/Nandanagit" target="_blank" rel="noopener noreferrer" className="hover:underline">
          github.com/Nandanagit
        </a>
      </div>
    </ContactSection>
  );
}

