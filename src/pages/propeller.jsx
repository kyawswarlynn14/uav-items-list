import React from 'react'
import Container from '../layout/container'
import Table from './table'

const Propeller = () => {
    return (
      <Container className="w-[70%] mx-auto">
        <Table item='propellers' />
      </Container>
    );
  }

export default Propeller;