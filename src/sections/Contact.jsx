import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { mySocials } from "../constants";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_38sd7br",
        "template_d2qj3q8",
        {
          from_name: formData.name,
          to_name: "Noppanut",
          from_email: formData.email,
          to_email: "noppanut.jang2547@gmail.com",
          message: formData.message,
        },
        "ZLQEN_5bP5BAYg_HK"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section id="contact" className="relative c-space section-spacing mb-16">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center max-w-md p-5 border border-white/10 rounded-2xl bg-primary">
          <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Let's Talk</h2>
            <p className="font-normal text-neutral-400">
              Whether you're loking to build a new website, improve your existing
              platform, or bring a unique project to life, I'm here to help
            </p>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="feild-label">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="feild-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="JohnDoe@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="feild-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                type="text"
                rows="4"
                className="field-input field-input-focus"
                placeholder="Share your thoughts..."
                autoComplete="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
            >
              {!isLoading ? "Send" : "Sending..."}
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center max-w-md p-5 border border-white/10 rounded-2xl bg-primary">
          <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Connect With Me</h2>
            <p className="font-normal text-neutral-400">
              Connect with me through my social media platforms
            </p>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 gap-4 mb-6">
              {mySocials.map((social, index) => (
                <a
                  href={social.href}
                  key={index}
                  target="_blank"
                  className="flex items-center gap-3 p-3 border border-white/10 rounded-lg hover:border-white/20 transition-colors"
                >
                  <img src={social.icon} className="w-6 h-6" alt={social.name} />
                  <span className="text-neutral-300 text-sm">{social.name}</span>
                </a>
              ))}
            </div>
            <div className="text-center">
              <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
              {/* <p className="text-xs text-neutral-400">© 2025 Ali. All rights reserved.</p> */}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact;
