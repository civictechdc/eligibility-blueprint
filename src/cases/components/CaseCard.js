import React from 'react';
import {
    Card,
    CardBlock,
    CardTitle,
    CardText
} from 'reactstrap';

const CaseCard = ({id, lastName, firstName, dateOfBirth, isSelected, handleSelect}) => {
    if(isSelected) {
        return (
            <Card body outline color="danger" className="m-3">
                <CardBlock>
                    <CardTitle><span className="material-icons">folder</span>Case Id: {id}</CardTitle>
                    <CardText className="ml-3">{lastName}, {firstName}</CardText>
                    <CardText className="ml-3">{dateOfBirth}</CardText>
                </CardBlock>
            </Card>
        )
    }
    return (
        <Card body onClick={() => handleSelect(id)} className="m-3">
            <CardBlock>
                <CardTitle><span className="material-icons">folder</span>Case Id: {id}</CardTitle>
                <CardText className="ml-3">{lastName}, {firstName}</CardText>
                <CardText className="ml-3">{dateOfBirth}</CardText>
            </CardBlock>
        </Card>
    )
}

export default CaseCard;