import React from "react";
import styled from "styled-components";
import { palette, size } from "styled-theme";
import { prop } from "styled-tools";

import GoogleLoginButton from "../../atoms/GoogleLoginButton";
import Heading from "../../atoms/Heading";
import Label from "../../atoms/Label";

const borderColor = palette("grayscale", 4);
const backgroundColor = palette("grayscale", 0, true);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: ${prop("width", "auto")};
  max-width: ${prop("max-width", "500px")};
  height: ${prop("height", "auto")};
  border: 1px solid ${borderColor};
  background-color: ${backgroundColor};
  box-sizing: border-box;

  @media screen and (max-width: ${size("mobileWidth")}) {
    padding: 0.5rem;
    border: none;
    background-color: ${({ theme }) => theme.genericBackgroundColor};

    @media (orientation: landscape){
      height: auto;
    }
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 2em;
  margin-bottom: 30px;

  @media screen and (max-width: ${size("mobileWidth")}) {
    font-size: 2.5em;
  }
`;

const StyledLabel = styled(Label)`
  margin-bottom: 80px;
  font-size: 1em;
`;

const LoginForm = ({
  title,
  information,
  onLogin,
  onLoginFailure,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <StyledHeading level={1}>{title}</StyledHeading>
      <StyledLabel>{information}</StyledLabel>
      <GoogleLoginButton
        onSuccess={onLogin}
        onFailure={onLoginFailure}
      />
    </Wrapper>
  );
};

export default LoginForm;
