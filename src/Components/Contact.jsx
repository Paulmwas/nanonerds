import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto italic">
            "Empowering Future Innovators"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faLocationDot} 
                    className="text-purple-600 text-xl" 
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
                  <p className="text-gray-600 mt-1">Naivasha, Nakuru County</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faPhone} 
                    className="text-purple-600 text-xl" 
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                  <div className="mt-1 space-y-1">
                    <p className="text-gray-600 hover:text-purple-600 transition-colors">
                      <a href="tel:+254784510615">+254 784 510615</a>
                    </p>
                    <p className="text-gray-600 hover:text-purple-600 transition-colors">
                      <a href="tel:+254728754387">+254 728 754387</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className="text-purple-600 text-xl" 
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <p className="mt-1">
                    <a 
                      href="mailto:NanoNerds@proton.me" 
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      NanoNerds@proton.me
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faLinkedin} 
                    className="text-purple-600 text-xl" 
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Connect With Us</h3>
                  <div className="flex space-x-4 mt-3">
                    <a 
                      href="https://www.instagram.com/nano_nerds?igsh=MWNvang2bWF0eHVlcA==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="text-white text-lg" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/108195362" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="text-white text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.42769916537!2d36.40561095!3d-0.717138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18289c48d74d1f0d%3A0x6d4d1e7979a8d5a0!2sNaivasha!5e0!3m2!1sen!2ske!4v1719400000000!5m2!1sen!2ske" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Naivasha Location Map"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;