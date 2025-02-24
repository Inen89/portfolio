import { useForm } from "react-hook-form";
import LineGradient from "../components/LineGradient";

export default function Contact() {
  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const inputContainerStyles = "flex gap-5  w-full min-h-28";

  const inputWrapperStyles = "relative group z-0 w-full   ";

  const inputStyles =
    "bg-dark-grey border-2 border-white text-white font-semibold placeholder-white px-4 py-2 rounded-md bg-transparent w-full h-14 focus:outline-none ";

  const spanStyles =
    "absolute top-0 left-0 h-14 z-[-1] w-0 bg-grey rounded-md group-focus-within:w-full  transition-all duration-1000";

  const textareaStyles =
    "bg-dark-grey border-2 border-white text-white font-semibold placeholder-white px-4 py-2 rounded-md bg-transparent w-full focus:outline-none ";
  const textareaSpanStyles =
    "absolute top-0 left-0 z-[-1] w-0 h-full bg-grey rounded-md group-focus-within:w-full  transition-all duration-1000";

  const errorStyles = "text-red p-1 max-w-full";

  return (
    <section id="contact" className="py-12 sm:py-40">
      {/* Header */}
      <header className="w-11/12 sm:w-7/12 mx-auto text-center">
        <h2 className="text-grey font-playfair font-semibold text-5xl sm:text-6xl">
          Contact <span className="text-white">Me!</span>
        </h2>
        <div className="flex justify-center mt-5 mb-10  sm:mb-20">
          <LineGradient
            width="w-11/12 ss:w-9/12 sm:w-10/12 md:w-7/12"
            gradientColor="bg-gradient-grey-white"
          />
        </div>
      </header>
      {/* Form */}
      <form
        className=" flex flex-col w-full sm:w-8/12 md:w-7/12 mx-auto"
        target="_blank"
        onSubmit={onSubmit}
        action="https://formsubmit.co/5306281fb8f7f5d1c08eabda5ada014f"
        method="POST"
      >
        {/* Full Name */}
        <div className={inputContainerStyles}>
          <div className={inputWrapperStyles}>
            <input
              className={inputStyles}
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: true,
                maxLength: 100,
                minLength: 3,
              })}
            />
            {errors.name && (
              <p className={errorStyles}>
                {errors.name.type === "required" && "This field is required"}
                {errors.name.type === "maxLength" &&
                  "Maximum length of this field is 100 char"}
                {errors.name.type === "minLength" &&
                  "Minimum length of this field is 3 char "}
              </p>
            )}
            <span className={spanStyles}></span>
          </div>
          {/* Email */}
          <div className={inputWrapperStyles}>
            <input
              className={inputStyles}
              type="text"
              placeholder="Email Address"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className={errorStyles}>
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" && "Invalid email address"}
              </p>
            )}
            <span className={spanStyles}></span>
          </div>
        </div>
        {/* Mobile Number */}
        <div className={inputContainerStyles}>
          <div className={inputWrapperStyles}>
            <input
              className={inputStyles}
              type="tel"
              placeholder="Mobile Number"
              {...register("mobile", {
                required: true,
                pattern:
                  /^\+?[0-9]{1,3}?[-.\s]?(\(?[0-9]{1,4}?\)?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9})$/,
              })}
            />
            {errors.mobile && (
              <p className={errorStyles}>
                {errors.mobile.type === "required" && "This field is required"}
                {errors.mobile.type === "pattern" && "Invalid phone number"}
              </p>
            )}
            <span className={spanStyles}></span>
          </div>
          {/* Email Subject */}
          <div className={inputWrapperStyles}>
            <input
              className={inputStyles}
              type="text"
              placeholder="Email Subject"
              {...register("subject", {
                required: true,
                maxLength: 100,
                minLength: 3,
              })}
            />
            {errors.subject && (
              <p className={errorStyles}>
                {errors.subject.type === "required" && "This field is required"}
                {errors.subject.type === "maxLength" &&
                  "Maximum length of this field is 100 char"}
                {errors.subject.type === "minLength" &&
                  "Minimum length of this field is 3 char "}
              </p>
            )}
            <span className={spanStyles}></span>
          </div>
        </div>
        <div>
          {/* Text Area */}
          <div className={inputWrapperStyles}>
            <textarea
              className={textareaStyles}
              name="message"
              placeholder="Message"
              rows="10"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
                minLength: 3,
              })}
            />
            {errors.message && (
              <p className={errorStyles}>
                {errors.message.type === "required" && "This field is required"}
                {errors.message.type === "maxLength" &&
                  "Maximum length of this field is 2000 char"}
                {errors.message.type === "minLength" &&
                  "Minimum length of this field is 3 char "}
              </p>
            )}
            <span className={textareaSpanStyles}></span>
          </div>

          {/* Hidden inputs */}
          <input type="hidden" name="_replyto" value={getValues("email")} />
          <input type="hidden" name="_subject" value={getValues("subject")} />
          <input type="hidden" name="_template" value="table"></input>
        </div>
        <div className="flex justify-center my-10">
          <button
            className="relative bg-white border-white border-4 text-dark-grey rounded-lg py-3 px-7 font-semibold z-30
            hover:text-white
            before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-dark-grey before:z-0
            before:transition-all before:duration-500 
            hover:before:w-full hover:before:z-[-1]"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
