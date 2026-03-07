import React from 'react';

export const EducationSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[rgb(31,31,31)] flex flex-col overflow-hidden items-stretch leading-[1.2] mt-2.5 pl-5 pr-5 py-5 rounded-[32px] max-md:max-w-full max-md:pr-5 transition-colors duration-300">
      <div className="bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] font-medium whitespace-nowrap justify-center px-2.5 py-[8.5px] rounded-[10px] w-fit transition-colors duration-300">
        <div>Education</div>
      </div>
      <article className="bg-white dark:bg-[rgb(31,31,31)] overflow-hidden text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] font-normal tracking-[-0.01px] mt-5 rounded-[20px] max-md:max-w-full transition-colors duration-300">
        <div className="border dark:border-[rgba(60,60,60,1)] flex w-full flex-col px-5 py-[22px] rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full transition-colors duration-300">
          <div className="text-sm leading-[1.3]">
            Lyceum of Subic Bay
          </div>
          <h3 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-[22px] tracking-[-0.44px] mt-1 max-md:mt-[5px] max-md:text-[18px] transition-colors duration-300">
            Bachelor of Science in Information Technology
          </h3>
          <p className="text-base leading-[23px] self-stretch mt-5 max-md:mt-2.5 max-md:max-w-full">
            Specializing in web and mobile application development with a focus on creating practical <br />
            solutions that streamline business operations and enhance efficiency. Trained to develop <br />
            real-world applications that solve tangible problems for clients and end-users.
          </p>
          <div className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-[21px] text-[13px] text-[rgba(116,116,116,1)] dark:text-[rgba(150,150,150,1)] mt-5 max-md:mt-2.5 transition-colors duration-300">
            <div className="flex items-stretch gap-[5px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/0171fb8151864c47c6de5b9d0659fdb4559c5c83?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 shrink-0"
                alt="Calendar icon"
              />
              <div className="basis-auto my-auto">
                September 2022 - April 2026
              </div>
            </div>
            <div className="flex items-stretch gap-[5px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/4399e38451f9324e495c4eaceaca4c1edb484b4e?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 shrink-0"
                alt="Location icon"
              />
              <div>Olongapo City, PH</div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
