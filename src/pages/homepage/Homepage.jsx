import Header from "@/components/common/header/Header";
import {
  HeroText,
  HightLightedText,
  Wrapper,
  frameImage,
  imageStyle,
  imageStyle2,
} from "./HomePageStyle";
import BackgroundImage from "@/assets/png/bg-cards.png";
import FrameImage1 from "@/assets/png/Frame-1.png";

const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <img
        src={BackgroundImage}
        alt="background-Card-image"
        style={imageStyle}
        className="responsive-image2"
      />

      <img
        src={BackgroundImage}
        alt="background-Card-image2"
        style={imageStyle2}
        className="responsive-image"
      />
      <img src={FrameImage1} alt="frame__Image" style={frameImage} className="frameImage" />
      <HeroText variant="p">
        WELCOME TO{" "} <br />
        <HightLightedText variant="span"> CENTUMO NFT’S </HightLightedText>
      </HeroText>
    </Wrapper>
  );
};

export default HomePage;
