import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/description/faq";

export function FAQ() {
  return (
    <>
      <p className="uppercase mb-3 font-semibold text-muted-foreground tracking-tight">
        Frequently Asked Questions
      </p>
      <Accordion type="multiple" className="w-full border-t">
        {faq.map(({ title, content }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold text-lg py-3 gap-3">
              {title}
            </AccordionTrigger>
            <AccordionContent className="text-base">{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
