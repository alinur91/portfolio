import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex  border-2 border-neutral-400 rounded-3xl p-2 sm:gap-7 sm:p-6">
      <div className="flex items-center sm:gap-2">
        <MdEmail fontSize="32px" />
        <a href="mailto: areshil91@gmail.com">areshil91@gmail.com</a>
      </div>
      <div className="flex items-center sm:gap-2">
        <FaLinkedin fontSize="32px" />
        <a href="https://hh.kz/resume/8f9572cdff0b8bf0180039ed1f4d734345396d">
          LinkedIn
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default ContactInfo;
