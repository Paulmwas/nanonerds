import { faBrain, faChalkboardTeacher, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const JoinUs = () => {
  const benefits = [
    {
      icon: faBrain,
      title: "A CONFIDENT, CAN-DO MINDSET",
      description: "Exposing children to new technology skills helps give them confidence to tackle new challenges. An open mindset is encouraged to always try, adapt and try again."
    },
    {
      icon: faChalkboardTeacher,
      title: "GUIDANCE FROM EXPERTS",
      description: "Subject matter experts demonstrate and provide guidance on developing foundational skills. Facilitators supervise to help overcome any challenges."
    },
    {
      icon: faCogs,
      title: "REAL SKILLS YOUR CHILD WILL USE",
      description: "The focus is on teaching foundational skills, then encouraging apprentices to imagine, create and improve their own solutions."
    }
  ];

  return (
    <section id="joinus" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-4">
          Why Choose Our STEM Program?
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg border border-purple-100 hover:border-purple-300 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
                  <FontAwesomeIcon 
                    icon={benefit.icon} 
                    className="text-purple-600 text-2xl" 
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-center text-purple-800 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-700 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-purple-200">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;