'use client';

import { FC } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { accordionQuestion } from '@/types/types';


interface AccordionComponentProps {
  items: accordionQuestion[];
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  className?: string;
}

const AccordionComponent: FC<AccordionComponentProps> = ({
  items,
  type = 'single',
  collapsible = true,
  className = '',
}) => {
  return (
    <Accordion
      type={type}
      collapsible={collapsible}
      className={`border border-black px-3 ${className}`}
      style={{ width: 'clamp(320px,90vw,896px)' }}
    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger
            className="flex items-center justify-start cursor-pointer gap-2 no-underline hover:no-underline before:content-['+'] data-[state=open]:before:content-['−'] before:text-lg before:font-bold [&>svg]:hidden"
          >
            {item.question}
          </AccordionTrigger>


          <AccordionContent
            className="px-4 text-start"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.answer}
            </p>
          </AccordionContent>

        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
