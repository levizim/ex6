import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

class NumButton extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.number);
    };

    render() {
        const variant = this.props.number <= 6 ? 'outline-success' : 'outline-danger';
        const activeVariant = this.props.number <= 6 ? 'success' : 'danger';

        return (
            <Col className="my-2 d-flex justify-content-center">
                <Button 
                    variant={this.props.number === this.props.activeNumber ? activeVariant : variant} 
                    style={{ width: '220px' }} 
                    onClick={this.handleClick}
                >
                    {this.props.number}
                </Button>
            </Col>
        );
    }
}

class Display extends React.Component {
    render() {
        return (
            <div className="text-center mt-5 bg-primary text-white p-3">
                {this.props.number} is clicked
            </div>
        );
    }
}

class ClassApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clickedNumber: null };
    }

    handleClick = (number) => {
        this.setState({ clickedNumber: number });
    }

    render() {
        const leftColumnNumbers = [1, 2, 3, 4, 5, 6];
        const rightColumnNumbers = [7, 8, 9, 10, 11, 12];

        return (
            <Container>
                <Row>
                    <Col>
                        {leftColumnNumbers.map((number) => (
                            <NumButton 
                                number={number} 
                                onClick={this.handleClick} 
                                key={number} 
                                activeNumber={this.state.clickedNumber}
                            />
                        ))}
                    </Col>
                    <Col>
                        {rightColumnNumbers.map((number) => (
                            <NumButton 
                                number={number} 
                                onClick={this.handleClick} 
                                key={number} 
                                activeNumber={this.state.clickedNumber}
                            />
                        ))}
                    </Col>
                </Row>
                {this.state.clickedNumber && <Display number={this.state.clickedNumber} />}
            </Container>
        );
    }
}

export default ClassApp;
