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
                        Direct all questions to team@codefordc.org and dc@datakind.org or visit us on <a href="https://codefordc.org/resources/slack.html">Code for DC</a> and <a href="https://join.slack.com/t/dkdc/shared_invite/enQtMzE4MzI2NzExMjIxLTYzMGEyMmVkMTM2OWFjYzYxNThiM2M4ZWUzZTQ5MmVlMDNmNzY3NDg5NjYyMGI0NzMxN2E0ZjhjN2I4M2M4MWM">DataKind DC</a> Slack!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;