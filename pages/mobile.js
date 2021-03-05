import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader

class mobile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <LayoutMobileContainer>
          <Header>
            <ImageArea>
              <LogoImage src={"mobileImages/logo.png"} />
              <LogoText>{COMPANY_NAME}</LogoText>
            </ImageArea>
            <Menu src={"mobileImages/menu.png"} onClick={() => alert("매뉴")} />
          </Header>
          <Content>
            <KskinIntroductionArea
              src={"mobileImages/KSKINIntroduction.png"}
              onClick={() => (window.location = "http://finance.kskin.io/")}
            />
            <AboutUs>
              <div className="carousel-container">
                <Carousel showStatus={false} showArrows={false}>
                  <AboutUsCarousel src={"mobileImages/aboutusBox1.png"} />
                  <AboutUsCarousel src={"mobileImages/aboutusBox2.png"} />
                  <AboutUsCarousel src={"mobileImages/aboutusBox3.png"} />
                </Carousel>
              </div>
            </AboutUs>
            <TeamArea>
              <div className="carousel-container">
                <Carousel showStatus={false} showArrows={false}>
                  <TeamCarousel src={"mobileImages/teamBox1.png"} />
                  <TeamCarousel src={"mobileImages/teamBox2.png"} />
                  <TeamCarousel src={"mobileImages/teamBox3.png"} />
                  <TeamCarousel src={"mobileImages/teamBox4.png"} />
                </Carousel>
              </div>
            </TeamArea>
            <TokenDistribution src={"mobileImages/tokenDistribution.png"} />
            <RoadMap src={"mobileImages/roadMap.png"} />
            <Contact>
              <ContactButtonArea>
                <div
                  style={{
                    width: "100%",
                    height: "20vw",
                  }}
                  onClick={() => window.open("mailto:contact@kskin.io")}
                />
                <div
                  style={{
                    width: "100%",
                    height: "20vw",
                    marginTop: "10vw",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/KSKIN-1931668387153571"
                    )
                  }
                />
                <div
                  style={{
                    width: "100%",
                    height: "20vw",
                    marginTop: "10vw",
                  }}
                  onClick={() => window.open("https://t.me/kskinchannel")}
                />
                <div
                  style={{
                    width: "100%",
                    height: "20vw",
                    marginTop: "10vw",
                  }}
                  onClick={() => window.open("https://t.me/kskingroup")}
                />
              </ContactButtonArea>
            </Contact>
            <Disclaimer src={"mobileImages/disclaimer.png"} />
          </Content>
        </LayoutMobileContainer>

        <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px;
          }
          .carousel .slide {
            background: transparent;
          }
        `}</style>
      </>
    );
  }
}

const COMPANY_NAME = "KSKIN";
const MAIN_BACKGROUNDCOLOR = "rgba(235,177,163,1)";

const Disclaimer = styled.img`
  height: 100%;
  width: 100%;
`;
const RoadMap = styled.img`
  height: 100%;
  width: 100%;
`;
const TokenDistribution = styled.img`
  height: 100%;
  width: 100%;
`;

const ContactButtonArea = styled.div`
  margin-top: 50vw;
  width: 100%;
  height: 140vw;
  display: flex;
  flex-direction: column;
  padding-top: 10vw;
  /* justify-content: space-around; */
  /* padding-bottom: 10vw;
  padding-top: 10vw; */
`;

const TeamArea = styled.div`
  height: 243vw;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("mobileImages/teamBox.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const Contact = styled.div`
  height: 211vw;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("mobileImages/contact.png");
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutUsCarousel = styled.img`
  width: 90vw;
  height: 100vw;
  background-size: contain;
`;
const TeamCarousel = styled.img`
  width: 90vw;
  height: 162vw;
  background-size: contain;
`;

const AboutUs = styled.div`
  height: 211vw;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("mobileImages/aboutus.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const LayoutMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.49);
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 100;
  height: 60px;
  padding-left: 30px;
  padding-right: 30px;
`;

const ImageArea = styled.div``;

const LogoImage = styled.img`
  width: 22px;
  height: 33px;
`;

const Menu = styled.img`
  width: 20px;
  height: 20px;
`;

const LogoText = styled.span`
  color: white;
  font-size: 14px;
  margin-left: 9px;
`;

const Content = styled.div`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: white;
`;
const KskinIntroductionArea = styled.img`
  width: 100;
  height: auto;
`;

export default mobile;
