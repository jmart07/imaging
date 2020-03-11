import React from 'react';
import Card from './shapes/Card';
import IdNumber from './shapes/IdNumber';
import Photo from './shapes/Photo';
import Name from './shapes/Name';
import ExportId from './shapes/ExportId';
import Barcode from './shapes/Barcode';
import Grade from './shapes/Grade';

const ShapesContainer = () => {

  return (
    <>
      <Card />
      <IdNumber />
      {/* <Photo />
      <Name />
      <ExportId />
      <Barcode />
      <Grade /> */}
    </>
  );
}

export default ShapesContainer;