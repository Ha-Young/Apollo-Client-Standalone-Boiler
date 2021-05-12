import React from "react";
import styled from "styled-components";
import { prop } from "styled-tools";

import Icon from "../../atoms/Icon";
import Label from "../../atoms/Label";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: ${prop("width", "auto")};
  height: 100%;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledIcon = styled(Icon)`
  margin: 1rem;
`;

const LageLabel = styled(Label)`
  font-weight: 600;
  font-size: 1.3em;
`;

const SmallLabel = styled(Label)`
  font-size: .9em;
`;

const LocationInfo = ({
  areaName,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <StyledIcon icon="marker" size={32}/>
      <Content>
        <SmallLabel>지금 보고 있는 지역은</SmallLabel>
        <LageLabel>{areaName}</LageLabel>
      </Content>
    </Wrapper>
  );
};

export default LocationInfo;