import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { componentsMap } from "@/description/app-sidebar";
import { customizedComponents } from "@/description/customized-components";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return Object.keys(componentsMap);
};

export const generateMetadata = ({
  params,
}: {
  params: { component: string };
}) => {
  const details = componentsMap[params.component as keyof typeof componentsMap];

  return {
    title: details.title,
    description: details.description,
  };
};

const CustomizedComponentPage = ({
  params: { component },
}: {
  params: { component: string };
}) => {
  const details = componentsMap[component as keyof typeof componentsMap];
  const components =
    customizedComponents[component as keyof typeof customizedComponents] || [];

  if (!details) return notFound();

  return (
    <div>
      <MainHeading>{details.title}</MainHeading>
      <DescriptionText className="mt-1">{details.description}</DescriptionText>

      <div className="mt-12 grid max-w-screen-md 2xl:max-w-full 2xl:grid-cols-2 gap-8">
        {components.map((component, index) => (
          <Block key={`${component.title}-${index}`} {...component} />
        ))}
      </div>
    </div>
  );
};

export default CustomizedComponentPage;
