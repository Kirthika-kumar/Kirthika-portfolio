import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai'
import { DiPython } from 'react-icons/di'
import { DiFirebase, DiReact, DiZend, DiCss3} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I am a fresher with basic problem solving skills.
        I like designing websites.
    </SectionText>
    <List>
      <ListItem>
        <span>
          <AiFillHtml5 size="3rem" />
          <DiCss3 size="3rem" />
        </span>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experiece with <br />
            HTML and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <span>
          <DiPython size="3rem" />
          <DiFirebase size="3rem" />
        </span>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Python and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
  
);

export default Technologies;
