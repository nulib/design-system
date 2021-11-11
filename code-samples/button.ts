export const button = `
import { Button } from '@nulib/design-system';

<Button isPrimary onClick={() => console.log("clicked")}>Ima Button</Button>
`;

export const buttonIcon = `
import { Button } from '@nulib/design-system';
import { FaPlus } from 'react-icons';

<Button>
    <FaPlus />
    <span>Add Something</span>
</Button>
`;
