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

const Collapse = () => {
  return (
    <AccordionStyle>
      <div className="accordion">
        <Accordion className="accordion-border" allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="button">
                섹션 1. 리액트의 기초
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="panel">
              <div>리액트 시작</div>
              <div>JSX</div>
              <div>컴포넌트</div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="button">
                섹션 1. 리액트의 기초
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="panel">
              <div>리액트 시작</div>
              <div>JSX</div>
              <div>컴포넌트</div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="button">
                섹션 1. 리액트의 기초
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="panel">
              <div>리액트 시작</div>
              <div>JSX</div>
              <div>컴포넌트</div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </AccordionStyle>
  );
};

export default Collapse;
