export const button = `
import { Button } from '@nulib/design-system';

<Button isPrimary onClick={() => console.log("clicked")}>Ima Button</Button>
`;

export const buttonIcon = `
import { Button, Icon } from '@nulib/design-system';

<Button>
    <Icon isSmall>
        <Icon.Add />
    </Icon>
    <span>Add Item</span>
</Button>
`;
