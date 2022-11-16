import React from 'react'
import Container from "../layout/container";
import Table from './table';

const Motor = () => {
    return (
      <Container className="w-[70%] mx-auto">
        <Table item='motors'/>
      </Container>
    );
  }

export default Motor