import React from 'react';

const FullName = ({first = 'John', last = 'Doe', hasBirthday = false}) => {
    const birthdayIcon = hasBirthday ? ' - 👑' : '';
    const fullName = `${last}, ${first}`;
    
    return <h1>{fullName} {birthdayIcon}</h1>;
}
/*
FullName.defaultProps = {
    first: "John",
    last: "Doe",
    hasBirthday: true
}
*/
export default FullName;