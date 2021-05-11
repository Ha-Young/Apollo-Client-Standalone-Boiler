import React from "react";
import styled from "styled-components";
import { palette } from "styled-theme";

import Icon from "../../atoms/Icon";
import FriendsEntry from "../../molecules/FriendsEntry";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  box-sizing: border-box;

  @media screen and (max-width: 614px) {
    display: none;
  }
`;

const StyledIcon = styled(Icon)`
  flex: none;
  margin-right: 50px;
  border: 1px solid ${palette("grayscale", 0)};
  border-radius: 50%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
  border-bottom: 1px solid ${palette("grayscale", 4)};
  font-size: 1.2rem;
  box-sizing: border-box;
  cursor: pointer;
`;

const UserName = styled.span`
  margin-left: 10px;
`;


const FriendsList = ({ userImgUrl, userName, friends = [], ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>
        {userImgUrl || <StyledIcon icon="user" width={48} />}
        <UserName>{userName}</UserName>
      </Header>
      <FriendsEntry friends={friends} />
    </Wrapper>
  );
};

export default FriendsList;