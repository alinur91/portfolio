import { Sections } from "../ts/enums";
import ContactInfo from "./ContactInfo";
import TitleAndSubtitle from "./TitleAndSubtitle"

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <TitleAndSubtitle section={Sections.Contact} />
      <ContactInfo/>
    </div>
  );
}

export default Contact