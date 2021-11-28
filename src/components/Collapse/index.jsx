import React from 'react';
import { AccordionStyle } from './styles';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Collapse = ({ data }) => {
  return (
    <AccordionStyle>
      <div className="accordion">
        <Accordion className="accordion-border" allowZeroExpanded>
          {data.length > 0 ? (
            data.map((section, idx) => (
              <AccordionItem key={section.id}>
                <AccordionItemHeading>
                  <AccordionItemButton className="button">
                    섹션 {idx + 1}. {section.title}
                  </AccordionItemButton>
                </AccordionItemHeading>
                {section.Videos?.map((video) => (
                  <AccordionItemPanel key={video.id} className="video">
                    <div>{video.title}</div>
                  </AccordionItemPanel>
                ))}
              </AccordionItem>
            ))
          ) : (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{ display: 'flex', justifyContent: 'center' }}
                  className="button"
                >
                  강의를 준비중입니다 ㅜ_ㅜ
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </AccordionStyle>
  );
};

export default React.memo(Collapse);
