import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex  border-2 border-neutral-400 rounded-[32px] p-3 sm:gap-7 md:gap-8 sm:px-6 sm:py-7 sm:text-xl">
      <div className="flex items-center gap-2">
        <MdEmail fontSize="32px" />
        <a href="mailto: areshil91@gmail.com">areshil91@gmail.com</a>
      </div>
      <div className="flex items-center gap-2">
        <FaLinkedin fontSize="32px" />
        <a
          target="_blank"
          href="https://hh.kz/resume/8f9572cdff0b8bf0180039ed1f4d734345396d"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
