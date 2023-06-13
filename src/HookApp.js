import React, { useState } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const NumButton = ({ number, activeNumber, onClick }) => {
    const handleClick = () => {
        onClick(number);
    };

    const variant = number <= 6 ? 'outline-danger' : 'outline-success';
    const activeVariant = number <= 6 ? 'danger' : 'success';

    return (
        <Col className="my-2 d-flex justify-content-center">
            <Button 
                variant={number === activeNumber ? activeVariant : variant} 
                style={{ width: '220px' }} 
                onClick={handleClick}
            >
                {number}
            </Button>
        </Col>
    );
}

const Display = ({ number }) => (
    <div className="text-center mt-5 bg-primary text-white p-3">
        {number} is clicked
    </div>
);


const HookApp = () => {
    const [clickedNumber, setClickedNumber] = useState(null);

    const handleClick = (number) => {
        setClickedNumber(number);
    };

    const leftColumnNumbers = [1, 2, 3, 4, 5, 6];
    const rightColumnNumbers = [7, 8, 9, 10, 11, 12];

    return (
        <Container>
            <Row>
                <Col>
                    {leftColumnNumbers.map((number) => (
                        <NumButton 
                            number={number} 
                            onClick={handleClick} 
                            key={number} 
                            activeNumber={clickedNumber}
                        />
                    ))}
                </Col>
                <Col>
                    {rightColumnNumbers.map((number) => (
                        <NumButton 
                            number={number} 
                            onClick={handleClick} 
                            key={number} 
                            activeNumber={clickedNumber}
                        />
                    ))}
                </Col>
            </Row>
            {clickedNumber && <Display number={clickedNumber} />}
        </Container>
    );
}

export default HookApp;
