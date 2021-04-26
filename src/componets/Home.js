import styled from "styled-components";
import ImageSlider from "./ImageSlider";
// import Recomends from "./Recomends";
import requests from "./Request";
import Row from "./Row";
import Viewers from "./Viewers";

function Home() {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Row title="Disney" fetchUrl={requests.fetchDisney} />
      <Row title="Pixar" fetchUrl={requests.fetchPixar} />
      <Row title="Mavel" fetchUrl={requests.fetchMarvel} />
      <Row title="Nat-Geo" fetchUrl={requests.fetchNational} />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default Home;
