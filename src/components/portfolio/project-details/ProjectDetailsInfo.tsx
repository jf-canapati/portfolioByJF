import React from 'react';

interface DetailItem {
  label: string;
  value: string;
}

interface DetailColumn {
  items: DetailItem[];
}

interface ProjectDetailsInfoProps {
  industry: string;
  client?: string;
  year: string;
  services: string;
}

export const ProjectDetailsInfo: React.FC<ProjectDetailsInfoProps> = ({ 
  industry, 
  client, 
  year, 
  services 
}) => {
  const leftColumn: DetailColumn = {
    items: [
      { label: 'Industry', value: industry },
      ...(client ? [{ label: 'Client', value: client }] : [])
    ]
  };

  const rightColumn: DetailColumn = {
    items: [
      { label: 'Year', value: year },
      { label: 'Services', value: services }
    ]
  };

  const DetailColumn: React.FC<{ column: DetailColumn }> = ({ column }) => (
    <div className="flex flex-col flex-1">
      {column.items.map((item, index) => (
        <div key={item.label} className={index > 0 ? 'mt-5' : ''}>
          <dt className="text-sm text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] font-medium leading-[1.2] transition-colors duration-300">
            {item.label}
          </dt>
          <dd className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-base font-normal leading-[1.4] tracking-[-0.01px] transition-colors duration-300">
            {item.value}
          </dd>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-white dark:bg-[rgb(31,31,31)] w-full overflow-hidden text-sm font-medium leading-[1.2] mt-[20px] rounded-[20px] max-md:max-w-full transition-colors duration-300">
      <div className="border dark:border-[rgba(60,60,60,1)] flex items-stretch gap-[40px_100px] flex-wrap pl-5 pr-5 py-5 rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full max-md:pr-5 max-md:gap-[20px_40px] max-md:flex-col transition-colors duration-300">
        <dl className="flex gap-[40px_100px] flex-wrap w-full max-md:flex-col max-md:gap-5">
          <DetailColumn column={leftColumn} />
          <DetailColumn column={rightColumn} />
        </dl>
      </div>
    </section>
  );
};
