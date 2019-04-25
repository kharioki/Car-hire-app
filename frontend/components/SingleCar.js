import React, { Component } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import PromoTag from './styles/PromoTag';
import Rate from './styles/Rate';

const SingleCarStyles = styled.div`
  margin: 2rem;
  box-shadow: ${props => props.theme.bs};
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

const STabs = styled(Tabs)`
  font-size: 12px;
  width: 100%;
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
  margin-right: 4px;
  border: 1px solid ${props => props.theme.lightGrey};
  padding: 10px;
  user-select: none;
  cursor: arrow;

  &.is-selected {
    color: ${props => props.theme.brown};
    border-bottom: 1px solid white;
  }

  &:focus {
    outline: none;
    box-shadow: ${props => props.theme.bs};
  }
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
  display: none;
  height: 200px;
  border: 1px solid ${props => props.theme.lightGrey};
  padding: 10px;
  margin-top: -5px;
  overflow-y: scroll;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = 'TabPanel';

class SingleCar extends Component {
  render() {
    const { car } = this.props;
    return (
      <SingleCarStyles>
        {car.imageURL && <img src={car.imageURL} alt={car.make} />}
        <Rate>
          <Link
            href={{
              pathname: '/book',
              query: { id: car.id }
            }}
          >
            <a>Book Now</a>
          </Link>
        </Rate>
        <PromoTag>$23 /day</PromoTag>
        <div>
          <STabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
          >
            <STabList>
              <STab>Description</STab>
              <STab>Availability</STab>
              <STab>Rules</STab>
              <STab>Reviews and Ratings</STab>
            </STabList>
            <STabPanel>
              <>
                <p>
                  Name: {car.make} {car.model} ({car.year})
                </p>
                <h5>Details</h5>
                <p>Engine: {car.engine}</p>
                <p>Transmission: {car.transmission}</p>
                <p>Mileage: {car.mileage}</p>
                <h5>Car accessories</h5>
                <p>Trunk/boot: {car.trunkAvailable ? 'Yes ✔' : 'No ❌'}</p>
                <p>Front Airbags: {car.hasFrontAirbags ? 'Yes ✔' : 'No ❌'}</p>
                <p>Rear Airbags: {car.hasBackAirbags ? 'Yes ✔' : 'No ❌'}</p>
                <p>Radio: {car.hasRadio ? 'Yes ✔' : 'No ❌'}</p>
                <p>
                  Passenger entertainment:{' '}
                  {car.hasPassengerEntertainment ? 'Yes ✔' : 'No ❌'}
                </p>
              </>
            </STabPanel>
            <STabPanel>availability</STabPanel>
            <STabPanel>Usage rules</STabPanel>
            <STabPanel>reviews and ratings</STabPanel>
          </STabs>
        </div>
      </SingleCarStyles>
    );
  }
}

export default SingleCar;
