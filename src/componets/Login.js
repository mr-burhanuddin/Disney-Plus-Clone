import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogo src="/images/Disney.svg" alt="logo" />
          <Description>The greatest stories, all in one place.</Description>
          <SignUp>Free SignUp</SignUp>
          <Note>
            *Subscriber agreement applies. Savings compared to 12 months of the
            monthly subscription price.
          </Note>
          <CTALogoTwo src="/images/6Brand.png" alt="logos" />
        </CTA>
        <BgImg />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImg = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/bgimg.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CTALogo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 5px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.h2``;
const Note = styled.p`
  color: whitesmoke;
  font-size: 10px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1px;
`;

export default Login;
