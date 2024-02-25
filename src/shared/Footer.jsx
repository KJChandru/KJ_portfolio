import linkedinIcon from '../assets/icons-white/linkedin-white.png';
import githubIcon from '../assets/icons-white/github-white.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h4 className="text-xl font-bold mb-2">Connect with me</h4>
          <p className="text-sm">Let's build something amazing together!</p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/chandrukj/" className=''><img src={linkedinIcon} alt="LinkedIn" className='w-6 h-6'/></a>
          <a href="https://github.com/KJChandru" className=''><img src={githubIcon} alt="GitHub" className='w-6 h-6'/></a>
        </div>
      </div>
      <div className="bg-black border-t border-gray-700 py-4 mt-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className='text-sm'>© 2024 KJ Chandru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
