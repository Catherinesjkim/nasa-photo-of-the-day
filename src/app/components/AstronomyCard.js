// Second stateless component is stateless(aka the dumb / dummy / static component).
// Always returns the same output. Component where data “flows” inside. Mostly used for representing something. Does not include the state, only props!
import React from 'react';
import styled from 'styled-components';

const PicDiv = styled.div`
  width: 80%;
`

const Img = styled.img`
  width: 100%;
`
const Container = styled.div`
  background: linear-gradient(to left, #20002c, #cbb4d4, #c33764, #1d2671);
`

const Section = styled.section`
  display: flex;
`

const InfoDiv = styled.div`
  width: 30%;
`
const Span = styled.span`
  font-weight: 900;
`

const AstronomyCard = ({hdurl, title, date, explanation}) => {
  return (
    <Container>

      <Section>
        <PicDiv>
          <Img src={hdurl} alt="APOD" />
        </PicDiv>
      </Section>

      <h2><Span>Title: </Span> {title}</h2>
      <p><Span>Date: </Span>{date}</p>

      <Section>
        <InfoDiv>
          <Span>Explanation: </Span>
          {explanation}
        </InfoDiv>
      </Section>
      
    </Container>
  );
};

export default AstronomyCard;