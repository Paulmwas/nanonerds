import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
              <img src={Logo} alt="STEM Logo"                width={32} 
                height={32} 
                className="w-8 h-8 rounded-full mr-2 object-contain" />
              Kidtech Innovators
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering Future Innovators through cutting-edge STEM education and early talent identification and exploitation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/108195362" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://www.instagram.com/nano_nerds?igsh=MWNvang2bWF0eHVlcA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-purple-300 transition-colors">Home</a></li>
              <li><a href="#mission" className="text-gray-300 hover:text-purple-300 transition-colors">Our Mission</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-purple-300 transition-colors">Programs</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-purple-300 transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-purple-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-400 mt-1 mr-3" />
                <span className="text-gray-300">Naivasha, Nakuru County</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-purple-400 mr-3" />
                <div className="flex flex-col">
                  <span className="text-gray-300">+254 784 510615</span>
                  <span className="text-gray-300">+254 728 754387</span>
                </div>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-purple-400 mr-3" />
                <a href="mailto:Kidtech Innovators@proton.me" className="text-gray-300 hover:text-purple-300 transition-colors">
                  kidtechinnovators@proton.me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Copyright and Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Kidtech Innovators. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-purple-300 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-purple-300 text-sm transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;