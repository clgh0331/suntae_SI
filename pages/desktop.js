import Router, { withRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";

class desk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: "Home",
    };
  }

  anchors = [
    "Home",
    "About-Us",
    "Team",
    "Token-Distrubution",
    "Roadmap",
    "Contract",
    "Disclaimer",
  ];

  setSection = (path) => {
    window.location.href = "/#" + path;
    this.setState({
      section: path,
    });
  };

  render() {
    return (
      <>
        <Container>
          <Header>
            <LogoContainer>
              <Logo src="/image/K_logo.png" />
              <LogoText>KSKIN</LogoText>
            </LogoContainer>
            <HeaderNavContainer>
              <HeaderItem
                active={this.state.section === "Home" ? true : false}
                onClick={() => this.setSection("Home")}
              >
                Home
              </HeaderItem>
              <HeaderItem
                active={this.state.section === "About-Us" ? true : false}
                onClick={() => this.setSection("About-Us")}
              >
                About us
              </HeaderItem>
              <HeaderItem
                active={this.state.section === "Team" ? true : false}
                onClick={() => this.setSection("Team")}
              >
                Team
              </HeaderItem>
              <HeaderItem
                active={
                  this.state.section === "Token-Distrubution" ? true : false
                }
                onClick={() => this.setSection("Token-Distrubution")}
              >
                Token Distrubution
              </HeaderItem>
              <HeaderItem
                active={this.state.section === "Roadmap" ? true : false}
                onClick={() => this.setSection("Roadmap")}
              >
                Roadmap
              </HeaderItem>
              <HeaderItem
                active={this.state.section === "Contract" ? true : false}
                onClick={() => this.setSection("Contract")}
              >
                Contract
              </HeaderItem>
              <HeaderItem
                active={this.state.section === "Disclaimer" ? true : false}
                onClick={() => this.setSection("Disclaimer")}
              >
                Disclaimer
              </HeaderItem>
            </HeaderNavContainer>
          </Header>
          <ReactFullpage
            anchors={this.anchors}
            navigation
            navigationTooltips={this.anchors}
            licenseKey="AD0EEBE0-C6A14C83-BA37F7A4-658F057C"
            scrollOverflow={true}
            onLeave={(origin, destination, direction) => {
              this.setState({ section: destination.anchor });
            }}
            render={({ state, fullpageApi }) => {
              return (
                <FullpageWrapper id="fullpage-wrapper">
                  <SectionHome className="section Home">
                    <SectionHomeButton
                      onClick={() => window.open("http://finance.kskin.io/")}
                    ></SectionHomeButton>
                    <Next>Next</Next>
                    <NextIcon src="/image/ic_down.png"></NextIcon>
                  </SectionHome>
                  <SectionAbout className="section About-us">
                    <NextIcon src="/image/ic_down.png"></NextIcon>
                  </SectionAbout>
                  <SectionTeam className="section Team">
                    <NextIcon src="/image/ic_down.png"></NextIcon>
                  </SectionTeam>
                  <SectionToken className="section Token-Distrubution">
                    <NextIcon src="/image/ic_down.png"></NextIcon>
                  </SectionToken>
                  <SectionRoadmap className="section Roadmap">
                    <NextIcon src="/image/ic_down.png"></NextIcon>
                  </SectionRoadmap>
                  <SectionContract className="section Contract">
                    <SectionWrapper>
                      <SectionTitleContainer>
                        <SectionTitleBox src="/image/box_title.png" />
                        <SectionTitle>Contact</SectionTitle>
                      </SectionTitleContainer>
                      <SectionContractBox>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "70px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              window.open("mailto:contact@kskin.io")
                            }
                          >
                            <ContractBoxIcon
                              width="40"
                              src="/image/ic_email.png"
                            />
                            <ContractBoxText>
                              Help @ Contact: contact@kskin.io
                            </ContractBoxText>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              window.open("https://t.me/kskinchannel")
                            }
                          >
                            <ContractBoxIcon
                              width="40"
                              src="/image/ic_telegram.png"
                            />
                            <ContractBoxText>Channel Telegram</ContractBoxText>
                          </div>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "70px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              window.open(
                                "https://www.facebook.com/KSKIN-1931668387153571"
                              )
                            }
                          >
                            <ContractBoxIcon
                              width="35"
                              src="/image/ic_facebook.png"
                            />
                            <ContractBoxText>Facebook</ContractBoxText>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              window.open("https://t.me/kskingroup")
                            }
                          >
                            <ContractBoxIcon
                              width="40"
                              src="/image/ic_telegram.png"
                            />
                            <ContractBoxText>Group Telegram</ContractBoxText>
                          </div>
                        </div>
                      </SectionContractBox>
                    </SectionWrapper>
                    <NextIcon src="/image/ic_down.png"></NextIcon>
                  </SectionContract>
                  <SectionDisclaimer className="section Disclaimer"></SectionDisclaimer>
                </FullpageWrapper>
              );
            }}
          />
        </Container>
        <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px;
          }

          #fp-nav.fp-right {
            right: 96px !important;
          }

          #fp-nav.fp-right li {
            list-style-type: none;
          }

          #fp-nav.fp-right .active {
            width: 15px;
            height: 15px;
            box-shadow: 0 0 6px 0 #ff564e;
            background-color: #ff564e;
            border-radius: 50%;
          }
          #fp-nav.fp-right span {
            background: #fff;
          }
          #fp-nav.fp-right .active span {
            background: #ff564e;
          }
        `}</style>
      </>
    );
  }
}

const Container = styled.div`
  min-width: 1920px;
`;

const Header = styled.div`
  z-index: 100;
  position: absolute;
  display: flex;
  width: calc(100% - 830px);
  height: 106px;
  padding: 0 415px;
  background-color: rgba(0, 0, 0, 0.49);
  justify-content: space-between;
  align-items: center;
`;

const HeaderNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderItem = styled.div`
  ${(props) => (props.active ? "text-shadow: 0 0 6px #ff564e;" : null)}
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => (props.active ? "#ff564e" : "#fff")};
  margin-left: 46px;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Logo = styled.img`
  width: 38px;
  margin-right: 15px;
`;

const LogoText = styled.span`
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.5;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;

const FullpageWrapper = styled.div``;

const Next = styled.div`
  color: white;
  position: absolute;
  bottom: 69px;
  left: calc(50% - 15px);
`;

const NextIcon = styled.img`
  position: absolute;
  width: 12px;
  bottom: 46.5px;
  left: calc(50% - 6px);
`;

const Section = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const SectionHome = styled(Section)`
  background-image: url("/image/Home.png");
`;

const SectionAbout = styled(Section)`
  background-image: url("/image/About.png");
`;

const SectionTeam = styled(Section)`
  background-image: url("/image/Team.png");
`;

const SectionToken = styled(Section)`
  background-image: url("/image/Token.png");
`;

const SectionRoadmap = styled(Section)`
  background-image: url("/image/Roadmap.png");
`;

const SectionContract = styled(Section)`
  background-image: url("/image/bg_5.png");
`;

const SectionDisclaimer = styled(Section)`
  background-image: url("/image/Disclaimer.png");
`;

const SectionHomeButton = styled.div`
  cursor: pointer;
  width: 21.5%;
  height: 21.6%;
  position: absolute;
  top: 62.4%;
  left: 17.7%;
`;

const SectionWrapper = styled.div`
  height: 100%;
`;

const SectionTitleContainer = styled.div`
  position: relative;
  top: 14.3%;
  left: 21.6%;
`;
const SectionTitleBox = styled.img`
  width: 160px;
`;
const SectionTitle = styled.div`
  position: absolute;
  top: 50px;
  left: 64px;
  font-size: 60px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  color: #ffffff;
`;

const SectionContractBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 1272px;
  height: 380px;
  padding: 117.2px 182.5px 142.2px;
  border-radius: 50px;
  border: solid 2px #f29d8a;
  margin: 250px auto;
  justify-content: center;
`;

const ContractBoxIcon = styled.img`
  margin-right: 26px;
`;
const ContractBoxText = styled.span`
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;

export default desk;
