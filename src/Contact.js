import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

const Contact = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col sm={{size: 8, offset: 2}}>
                    <p>
                        Direct all questions to team@codefordc.org or visit us on Slack!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;