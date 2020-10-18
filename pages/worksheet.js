// @flow
import * as React from 'react';
import { NextSeo } from 'next-seo';
import Page, { SectionHeading, Heading, Subheading } from '../components/Page';

export default function Worksheet() {
  return (
    <Page showEmailCapture={false} displayProgress={false}>
      <NextSeo
        config={{
          title: 'Digital Security Training 101 Worksheet'
        }}
      />

      <SectionHeading>
        <Heading>Digital Security Training Worksheet</Heading>
      </SectionHeading>
      <br/>
      <p>This worksheet is used to practice threat modeling and was originally designed for the D4BL digitial security training.</p>
      <br/>
      <Subheading>
        Black LGBT youth living with conservative religious family
        </Subheading>
        <p>What information do I want to keep secret?</p>
        <textarea style={{width:"100%", height: "10vh"}}/>
        <p>From whom?</p>
        <textarea style={{width:"100%", height: "10vh"}}/>
        <p>What tools do they have (to try and get the information)?</p>
        <textarea style={{width:"100%", height: "10vh"}}/>
        <p>How likely is it that I will need to protect it?</p>
        <textarea style={{width:"100%", height: "10vh"}}/>
        <p>What do I have to lose if the information gets out?</p>
        <textarea style={{width:"100%", height: "10vh"}}/>
        <p>What steps am I willing to take to protect information more:</p>
        <textarea style={{width:"100%", height: "10vh"}}/>

        <Subheading style={{ marginTop: "20px", paddingTop: "20px", borderTop: "4px white solid" }}>
        Black activist who is a leader in public protests
        </Subheading>
        <p>What information do I want to keep secret?</p>
        <textarea style={{width:"100%", height: "10vh"}}/>
        <p>From whom?</p>
        <textarea style={{width:"100%", height: "10vh"}}/>
        <p>What tools do they have (to try and get the information)?</p>
        <textarea style={{width:"100%", height: "10vh"}}/>
        <p>How likely is it that I will need to protect it?</p>
        <textarea style={{width:"100%", height: "10vh"}}/>
        <p>What do I have to lose if the information gets out?</p>
        <textarea style={{width:"100%", height: "10vh"}}/>
        <p>What steps am I willing to take to protect information more:</p>
        <textarea style={{width:"100%", height: "10vh"}}/>
    </Page>
  );
}
