import React from "react";
import styled from "styled-components";
import { size } from "styled-theme";
import { prop } from "styled-tools";

import Label from "../../atoms/Label";
import PostCard from "../../molecules/PostCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${prop("width", size("postMaxWidth"))};
  box-sizing: border-box;
  @media screen and (max-width: ${size("postMaxWidth")}) {
    width: 100%;
  }
`;

const PostItem = styled(PostCard)`
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${size("maxWidth")}) {
    &:not(:last-child) {
      margin-bottom: 1.75rem;
    }
  }
`;

const EmptyPosts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
`;

const PostList = ({ posts = [], fetchingOptions, ...props }) => {
  const { areaName, year, season } = fetchingOptions;

  return (
    <Wrapper {...props}>
      {posts.length > 0 ? (
        posts.map((post) => <PostItem key={post._id} post={post} />)
      ) : (
        <EmptyPosts>
          {year && season ? (
            <>
              <Label>
                <b>{areaName}</b>에 {year}년 {season}에 대한 추억은
              </Label>
              <Label>
                아쉽지만없습니다.
              </Label>
            </>
          ) : (
            <>
              <Label>
                {areaName ? <b>{areaName}</b> : ""} 에 대한 포스트는 아직
                없습니다.
              </Label>
              <Label>당신이 첫번째 포스트의 주인공이 되어보세요 :)</Label>
            </>
          )}
        </EmptyPosts>
      )}
    </Wrapper>
  );
};

export default PostList;
