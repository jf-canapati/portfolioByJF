import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailClick = () => {
    window.location.href = 'mailto:lumedalauvigne@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/lauvigne-lumeda', '_blank');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', { email, message });
    // Implement contact form submission logic
    setEmail('');
    setMessage('');
  };

  return (
    <footer className="flex w-full flex-col overflow-hidden items-center font-normal pb-20 px-20 max-md:max-w-full max-md:px-5">
      <div className="bg-white flex w-[760px] max-w-full flex-col items-stretch px-5 py-[21px] rounded-[32px]">
        <button
          onClick={handleEmailClick}
          className="bg-white w-full overflow-hidden whitespace-nowrap rounded-[20px] max-md:max-w-full hover:shadow-lg transition-shadow"
        >
          <div className="border flex w-full items-stretch gap-5 flex-wrap justify-between p-5 rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full">
            <div className="text-[rgba(80,80,80,1)] text-base leading-[1.4] tracking-[-0.01px] my-auto">
              E-mail
            </div>
            <div className="flex items-stretch gap-[39px] text-[22px] text-[rgba(20,20,20,1)] text-right tracking-[-0.44px] leading-[1.2]">
              <div className="basis-auto grow shrink my-auto">
                lumedalauvigne@gmail.com
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/387809b689717cb5fb3def1ed4a968cf86f325c6?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-10 shrink-0 rounded-[10px]"
                alt="Email icon"
              />
            </div>
          </div>
        </button>
        
        <button
          onClick={handleLinkedInClick}
          className="bg-white w-full overflow-hidden whitespace-nowrap mt-2.5 rounded-[20px] max-md:max-w-full hover:shadow-lg transition-shadow"
        >
          <div className="border flex w-full items-stretch gap-5 flex-wrap justify-between p-5 rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full">
            <div className="text-[rgba(80,80,80,1)] text-base leading-[1.4] tracking-[-0.01px] my-auto">
              LinkedIn
            </div>
            <div className="flex items-stretch gap-10 text-[22px] text-[rgba(20,20,20,1)] text-right tracking-[-0.44px] leading-[1.2]">
              <div className="basis-auto my-auto">
                in/lauvigne-lumeda
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/5b21a59a000c31a1917fed158d632e7bbd47e889?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-10 shrink-0 rounded-[10px]"
                alt="LinkedIn icon"
              />
            </div>
          </div>
        </button>

        <form onSubmit={handleContactSubmit} className="mt-5 space-y-3">
          <div>
            <label htmlFor="contact-email" className="sr-only">Your Email</label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 border border-[rgba(234,234,234,1)] rounded-[20px] text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">Your Message</label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              rows={4}
              className="w-full px-4 py-3 border border-[rgba(234,234,234,1)] rounded-[20px] text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[rgba(20,20,20,1)] text-white py-3 px-6 rounded-[20px] text-base font-medium hover:bg-[rgba(40,40,40,1)] transition-colors"
          >
            Send Message
          </button>
        </form>
        
        <div className="text-[rgba(80,80,80,1)] text-sm leading-[1.3] tracking-[-0.01px] text-center self-center mt-6">
          2026 © Feinpoint: Lauv
        </div>
      </div>
    </footer>
  );
};
