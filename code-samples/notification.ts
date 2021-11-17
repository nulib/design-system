export const notification = `
import { Notification } from '@nulib/design-system';

<Notification>
    <p><strong>Hey you!</strong></p>
    <p>I want to tell you something</p>
</Notification>
`;

export const notificationWithDelete = `
// Supports a delete button, by applying "delete" class to child element

<Notification>
    <button className="delete" onClick={() => console.log("remove")} />
    <p>Some message goes here</p>
</Notification>
`;
