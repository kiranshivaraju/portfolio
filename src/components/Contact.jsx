import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Contact me here!</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4" title="The weather is nice here">{CONTACT.address}</p>
        <p className="my-4" title="Leave a text!">{CONTACT.phoneNo}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-white hover:underline"
          title="I'll respond soon!"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
