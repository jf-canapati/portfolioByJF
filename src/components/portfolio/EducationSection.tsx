import React from 'react';

export const EducationSection: React.FC = () => {
  return (
    <section className="bg-white flex flex-col overflow-hidden items-stretch leading-[1.2] mt-2.5 p-5 rounded-[32px] max-md:max-w-full">
      <div className="bg-[rgba(234,234,234,1)] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] font-medium whitespace-nowrap justify-center px-2.5 py-[13px] rounded-[10px]">
        <div>Education</div>
      </div>
      <article className="bg-white overflow-hidden text-[rgba(80,80,80,1)] font-normal tracking-[-0.01px] mt-5 rounded-[20px] max-md:max-w-full">
        <div className="border flex w-full flex-col px-5 py-[22px] rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full">
          <div className="text-sm leading-[1.3]">
            University of the City of Manila
          </div>
          <h3 className="text-[rgba(20,20,20,1)] text-[22px] tracking-[-0.44px] mt-3">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-base leading-[22px] self-stretch mt-[26px] max-md:max-w-full">
            Specializing in software engineering and systems architecture, I bridge high-level principles <br />
            like compiler theory and full-stack development with high-performance, real-world web <br />
            applications.
          </p>
          <div className="flex items-stretch gap-[21px] text-[13px] text-[rgba(116,116,116,1)] mt-[23px]">
            <div className="flex items-stretch gap-[5px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/0171fb8151864c47c6de5b9d0659fdb4559c5c83?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 shrink-0"
                alt="Calendar icon"
              />
              <div className="basis-auto my-auto">
                September 2022 - May 2026
              </div>
            </div>
            <div className="flex items-stretch gap-[5px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/4399e38451f9324e495c4eaceaca4c1edb484b4e?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 shrink-0"
                alt="Location icon"
              />
              <div>Manila, PH</div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
