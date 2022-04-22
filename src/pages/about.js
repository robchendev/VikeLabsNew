import React from "react"
import Layout from "../components/Layout/Layout"
import styled from '@emotion/styled';
import {COLORS} from '../styles/globalstyles/theme';

const Page = styled.body`
  background-color: var(--color-background, ${COLORS.background.light});
  color: var(--color-text, ${COLORS.text.light});
  overflow: hidden;
`
const Opening = styled.section`
  background-color: var(--color-comment, ${COLORS.comment.light});
  padding: 2.5rem;
  display: flex;
  justify-content: left;
  align-items: center;
  h1{
    margin-bottom: 0;
  }
`
const Facts = styled.section`
  //background-color: var(--color-primary, ${COLORS.primary.light});
  margin-top: 1rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
`
const Content = styled.section`
  padding-left: 1rem;
  padding-right: 1rem;
`
const Ending = styled.section`
  //background-color: var(--color-primary, ${COLORS.primary.light});
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    margin-bottom: 0;
  }
`


const About = () => {

  function getLineNumber(string) {
    return 0;
  }



  return (
    <Layout title="About">
      <Page>
        <Opening>
          <h1>We are VikeLabs.</h1>
        </Opening>
        <Content>
          <Facts>
            <ul>
              <li>Founded in YYYY.</li>
              <li>Has 80+ active members.</li>
              <li>Founded in YYYY.</li>
            </ul>
          </Facts>
          <p>VikeLabs is a collective of students who learn to build, deploy, and test software quickly. We view UVic as a kind of laboratory for testing solutions to problems that exist within the UVic community. We limit ourselves to the UVic community because it's much easier to deploy and test solutions to users where we are in close proximity to them and their problems.</p>
          <p>We accept members from every faculty who have an interest in product design/research, software development, business, marketing, or product management.</p>
          </Content>
        <Ending>
          <h2>Join us.</h2>
        </Ending>
      </Page>
    </Layout>
  )
}

export default About