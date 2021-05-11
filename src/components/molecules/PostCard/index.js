import React from "react";
import styled from "styled-components";
import { palette } from "styled-theme";

import defaultImg from "../../../assets/images/examplePostImage.jpeg";
import Icon from "../../atoms/Icon";
import Img from "../../atoms/Img";
import PostTitle from "../../molecules/PostTitle";
import PostContent from "../PostContent";

const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 614px;
  border: 1px solid ${palette("grayscale", 4)};
  box-sizing: border-box;
  @media screen and (max-width: 614px) {
    padding: 0.5rem;
    width: 100%;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
  border-bottom: 1px solid ${palette("grayscale", 4)};
  font-size: 1.2rem;
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  max-width: 614px;
  max-height: 614px;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  min-height: 100px;
`;

const PostCard = ({ post, ...props }) => {
  const imgSrc = post.postImageUrl || defaultImg;
  return (
    <Wrapper {...props}>
      <Header>
        <PostTitle post={post} />
      </Header>
      <ImageWrapper>
        <Img src={imgSrc} width="100%" height="100%" />
      </ImageWrapper>
      <ContentWrapper>
        <PostContent post={post} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default PostCard;
