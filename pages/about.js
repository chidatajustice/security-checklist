// @flow
import * as React from "react";
import Page, {
  SectionHeading,
  Heading,
  Subheading,
  Section,
} from "../components/Page";

const missionList  =  `
- Feel empowered to take steps towards more privacy and security in our digital lives.\n
- Learn cut through the noise and focus on a specific security concern.\n
- Have conversation around digital security that centers black and brown people.
`

export default function About() {
  return (
    <Page showEmailCapture={false} displayProgress={false}>
      <SectionHeading>
        <Heading>About</Heading>
        <Subheading>Goals for Security Training</Subheading>
        <Section source={missionList}/>
        <Subheading>Data for Black Lives Chicago Mission</Subheading>
        <Section>
          Bring together black technologists and community members in Chicago to
          learn together about data and justice. Empower each other to apply our
          skills.
        </Section>
      </SectionHeading>
    </Page>
  );
}
