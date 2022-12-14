import React from "react";
import {
  Wrapper,
  GridContainer,
  RedImage,
  RedTabImage,
  RedMobileImage,
  YellowImage,
  YellowTabImage,
  YellowMobileImage,
  GreenImage,
  GreenTabImage,
  GreenMobileImage,
  GrayImage,
  GrayTabImage,
  GrayMobileImage,
  ImageContainer,
  TextWrapper,
  Info,
  Text,
  Icon,
  AddText,
  Title,
} from "./BeautyOfWeb3.styled";

const BeautyOfWeb3 = () => {
  const data = [
    "Proof of Contribution",
    "Marketing & Partnership",
    "Sell your work as mintable assets",
    "Creator Grants",
  ];
  return (
    <Wrapper>
      <GridContainer>
        <ImageContainer>
          <RedImage
            data-aos="fade-up "
            data-aos-offset="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            src="/thePlatform/img-beautyweb3Red.webp"
          />
          <RedTabImage
            data-aos="fade-up "
            data-aos-offset="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            src="/thePlatform/img-beautyweb3Red_t.webp"
          />
          <RedMobileImage
            data-aos="fade-up "
            data-aos-offset="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            src="/thePlatform/img-beautyweb3Red_m.webp"
          />
          <YellowImage
            data-aos="fade-up "
            data-aos-offset="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            data-aos-delay="200"
            src="/thePlatform/img-beautyweb3Yellow.webp"
          />
          <YellowTabImage
            data-aos="fade-up "
            data-aos-offset="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            data-aos-delay="200"
            src="/thePlatform/img-beautyweb3Yellow_t.webp"
          />
          <YellowMobileImage
            data-aos="fade-up "
            data-aos-offset="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            data-aos-delay="200"
            src="/thePlatform/img-beautyweb3Yellow_m.webp"
          />
          <GreenImage
            data-aos="fade-up "
            data-aos-offset="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
            src="/thePlatform/img-beautyweb3Green.webp"
          />
          <GreenTabImage
            data-aos="fade-up "
            data-aos-offset="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
            src="/thePlatform/img-beautyweb3Green_t.webp"
          />
          <GreenMobileImage
            data-aos="fade-up "
            data-aos-offset="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
            src="/thePlatform/img-beautyweb3Green_m.webp"
          />
          <GrayImage
            data-aos="fade-up "
            data-aos-offset="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            data-aos-delay="400"
            src="/thePlatform/img-beautyweb3Gray.webp"
          />
          <GrayTabImage
            data-aos="fade-up "
            data-aos-offset="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            data-aos-delay="400"
            src="/thePlatform/img-beautyweb3Gray_t.webp"
          />
          <GrayMobileImage
            data-aos="fade-up "
            data-aos-offset="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            data-aos-delay="400"
            src="/thePlatform/img-beautyweb3Gray_m.webp"
          />
        </ImageContainer>
        <TextWrapper
          data-aos="fade-up "
          data-aos-offset="20"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <Title>Beauty of web3 built upon the power of web2</Title>
          <Info>
            {data.map((el, i) => (
              <AddText key={i}>
                <Icon src="/thePlatform/icons/add.svg" alt="#" />
                <Text>{el}</Text>
              </AddText>
            ))}
          </Info>
        </TextWrapper>
      </GridContainer>
    </Wrapper>
  );
};

export default BeautyOfWeb3;
