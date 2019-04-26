import React, { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import Form from './styles/Form';

const ListForm = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

class ListCar extends Component {
  state = {
    make: '',
    model: '',
    year: '',
    mileage: 0,
    transmission: '',
    engine: '',
    chassisNumber: '',
    numberPlate: '',
    imageURL: ''
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val
    });
  };

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'rentMyCar');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/khariokitony/image/upload',
      {
        method: 'POST',
        body: data
      }
    );

    const file = await res.json();
    this.setState({
      imageURL: file.secure_url
      //   largeImage: file.eager[0].secure_url
    });
  };

  render() {
    return (
      <ListForm>
        <Form>
          <fieldset>
            <label htmlFor="file">
              Image
              <input
                type="file"
                id="file"
                name="file"
                placeholder="Upload an Image"
                required
                onChange={this.uploadFile}
              />
              {this.state.imageURL && (
                <img
                  width="200"
                  src={this.state.imageURL}
                  alt="Upload Preview"
                />
              )}
            </label>
            <label htmlFor="make">
              Make
              <input
                type="text"
                id="make"
                name="make"
                placeholder="e.g Toyota"
                required
                value={this.state.make}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="model">
              Model
              <input
                type="text"
                id="model"
                name="model"
                placeholder="e.g Vitz"
                required
                value={this.state.model}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="year">
              Year
              <input
                type="text"
                id="year"
                name="year"
                placeholder="e.g 2009"
                required
                value={this.state.year}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="mileage">
              Mileage
              <input
                type="number"
                id="mileage"
                name="mileage"
                required
                value={this.state.mileage}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="transmission">
              Transmission
              <select
                id="transmission"
                name="transmission"
                onChange={this.handleChange}
              >
                <option value="">--Please choose an option--</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
              </select>
            </label>
            <label htmlFor="engine">
              Engine
              <select id="engine" name="engine" onChange={this.handleChange}>
                <option value="">--Please choose an option--</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
              </select>
            </label>
            <label htmlFor="chassisNumber">
              Chassis Number
              <input
                type="text"
                id="chassisNumber"
                name="chassisNumber"
                required
                value={this.state.chassisNumber}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="numberPlate">
              Number Plate
              <input
                type="text"
                id="numberPlate"
                name="numberPlate"
                placeholder="e.g KCT 9..."
                required
                value={this.state.numberPlate}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="trunkAvailable">
              Is Trunk available?{' '}
              <input
                type="checkbox"
                id="trunkAvailable"
                name="trunkAvailable"
                required
                value={this.state.trunkAvailable}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="hasFrontAirbags">
              Has front Airbags?{' '}
              <input
                type="checkbox"
                id="hasFrontAirbags"
                name="hasFrontAirbags"
                required
                value={this.state.hasFrontAirbags}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="hasBackAirbags">
              Has rear Airbags?{' '}
              <input
                type="checkbox"
                id="hasBackAirbags"
                name="hasBackAirbags"
                required
                value={this.state.hasBackAirbags}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="hasRadio">
              Has Radio?{' '}
              <input
                type="checkbox"
                id="hasRadio"
                name="hasRadio"
                required
                value={this.state.hasRadio}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="hasPassengerEntertainment">
              Has passenger Entertainment system?{' '}
              <input
                type="checkbox"
                id="hasPassengerEntertainment"
                name="hasPassengerEntertainment"
                required
                value={this.state.hasPassengerEntertainment}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit">Add Car</button>
          </fieldset>
        </Form>
      </ListForm>
    );
  }
}

export default ListCar;
