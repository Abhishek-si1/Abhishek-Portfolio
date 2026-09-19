import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaUser,
  FaComment,
  FaPhone,
  FaBriefcase,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import useInView from "../../hooks/useInView";
import { profile } from "../../data/profile";

// EmailJS credentials come from .env (see .env.example). Note: Vite inlines VITE_* values
// into the public bundle, so this is config hygiene, not secrecy - EmailJS public keys are
// designed to be public. Restrict "Allowed origins" in the EmailJS dashboard to your domain.
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const isEmailConfigured = Object.values(EMAILJS).every(Boolean);

const ContactMe = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sectionRef, isVisible] = useInView();
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (
      formData.phone &&
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!isEmailConfigured) {
      console.error(
        "EmailJS is not configured. Copy .env.example to .env and set the VITE_EMAILJS_* values."
      );
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        form.current,
        EMAILJS.publicKey
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Email send error:", error);

      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section-enhanced" ref={sectionRef}>
      <div className="container">
        <div className="row">
          {/* Contact Info Side */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div
              className={`contact-info ${isVisible ? "animate-fadeInLeft" : ""}`}
            >
              <h2 className="section-title text-start">Let's Work Together</h2>
              <p className="contact-description">
                Have a project in mind or want to collaborate on something? Drop me a message
                and I'll get back to you within 24 hours.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-info">
                    <h4>Email Me</h4>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-info">
                    <h4>Call Me</h4>
                    <a href={profile.phoneHref}>{profile.phone}</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-info">
                    <h4>Location</h4>
                    <p>{profile.location}</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaBriefcase />
                  </div>
                  <div className="method-info">
                    <h4>Let's Collaborate</h4>
                    <p>Open for freelance & full-time roles</p>
                  </div>
                </div>
              </div>

              <div className="social-connect">
                              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="col-lg-7">
            <div
              className={`contact-form-enhanced ${
                isVisible ? "animate-fadeInRight" : ""
              }`}
            >
              {submitStatus === "success" && (
                <div className="status-message success">
                  <FaCheckCircle className="me-2" />
                  Message sent successfully! I'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="status-message error">
                  <FaTimesCircle className="me-2" />
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}

              <form
                ref={form}
                onSubmit={handleSubmit}
                className="enhanced-form"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-enhanced">
                      <label htmlFor="name" className="form-label-enhanced">
                        <FaUser className="label-icon" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className={`form-control-enhanced ${
                          errors.name ? "error" : ""
                        }`}
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <span className="error-message">{errors.name}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group-enhanced">
                      <label htmlFor="email" className="form-label-enhanced">
                        <FaEnvelope className="label-icon" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        className={`form-control-enhanced ${
                          errors.email ? "error" : ""
                        }`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <span className="error-message">{errors.email}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-enhanced">
                      <label htmlFor="phone" className="form-label-enhanced">
                        <FaPhone className="label-icon" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        className={`form-control-enhanced ${
                          errors.phone ? "error" : ""
                        }`}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <span className="error-message">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group-enhanced">
                      <label htmlFor="subject" className="form-label-enhanced">
                        <FaBriefcase className="label-icon" />
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className={`form-control-enhanced ${
                          errors.subject ? "error" : ""
                        }`}
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a subject</option>
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="Freelance Project">Freelance Project</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && (
                        <span className="error-message">{errors.subject}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group-enhanced">
                  <label htmlFor="message" className="form-label-enhanced">
                    <FaComment className="label-icon" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    maxLength="500"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    className={`form-control-enhanced ${
                      errors.message ? "error" : ""
                    }`}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <div className="character-count">
                    {formData.message.length}/500
                  </div>
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-submit-enhanced"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="me-2" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="form-note">
                  * Required fields. I typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;