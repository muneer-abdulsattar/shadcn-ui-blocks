import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "What are Shadcn UI components?",
    content:
      "Shadcn UI components are pre-designed user interface elements that can be easily integrated into your web projects. They provide a streamlined way to enhance the visual appeal and functionality of your applications.",
  },
  {
    title: "How can I use the Shadcn UI code snippets?",
    content:
      "You can use the Shadcn UI code snippets by previewing them on our platform, copying the provided code, and pasting it directly into your project. This allows for quick implementation without extensive coding.",
  },
  {
    title: "What types of customized components are available?",
    content:
      "Our collection includes various customized Shadcn UI components designed for flexibility and style, such as buttons, inputs, accordions, tabs, cards, etc., allowing you to create a unique look for your application.",
  },
  {
    title: "Are the blocks responsive?",
    content:
      "Yes, all blocks are designed to be responsive, ensuring they look great on devices of all sizes. You can easily integrate them into your website without worrying about compatibility issues.",
  },
  {
    title: "Can I modify the Shadcn UI components after copying them?",
    content:
      "Absolutely! Once you copy the code for any Shadcn UI component or block, you have full freedom to modify it according to your project's requirements.",
  },
];

export function FAQ() {
  return (
    <>
      <p className="uppercase mb-3 font-semibold text-muted-foreground tracking-tight">
        Frequently Asked Questions
      </p>
      <Accordion type="multiple" className="w-full border-t">
        {items.map(({ title, content }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold text-[17px] tracking-tight py-3 gap-3">
              {title}
            </AccordionTrigger>
            <AccordionContent className="text-base">{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
