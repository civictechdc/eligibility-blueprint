import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

const About = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col sm={{size: 8, offset: 2}}>
                    <p>
                        This project as part of th 2017 National Day of Civic Hacking.  The D.C. Government, DataKind and Code for D.C.
                        partnered together to create this application
                    </p>
                    <p>
                        This is currently just a prototype, but the project is in active development.  If you are interested int contributing,
                        please take a look at our <a href="https://github.com/codefordc/cfsa-referral">github repository</a>.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;