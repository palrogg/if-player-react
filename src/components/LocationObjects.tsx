import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import { IItem } from "../types"
import styled from "styled-components/macro"
import useStrings from "./Localize"

const LocationObjectsDiv = styled.div`
  margin-top:10px;
	margin-bottom:10px;
`;
type IProps = {
  items: Array<IItem>;
}

const LocationObjects: FunctionComponent<IProps> = ({ items = [] }) => {
  const locationObjects = items
    .filter((item: IItem) => {
      return item.show !== false;
    })
    .map((item: IItem) => {
      return item.desc;
    })
    .join(", ");
  return (
    <LocationObjectsDiv>
      <div>{useStrings().locationMessage}</div>
      {locationObjects.length > 0 ? (
        <div>{locationObjects}.</div>
      ) : (
          <div>Rien de particulier.</div>
        )}
    </LocationObjectsDiv>
  );
};
LocationObjects.propTypes = {
  items: PropTypes.array.isRequired
};

export default LocationObjects;
