import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
    disabled: true,
  },
  {
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function DisabledAccordionItemDemo() {
  return (
    <Accordion type="single" collapsible className="max-w-lg my-4 w-full">
      {items.map(({ title, content, disabled }, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          disabled={disabled}
          className={cn({
            "opacity-50": disabled,
          })}
        >
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
