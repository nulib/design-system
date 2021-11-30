export const popover = `
import { Popover, Button } from '@nulib/design-system';

<Popover>
    <Popover.Trigger>
        <Button isPrimary as="span">Trigger Text</Button>
    </Popover.Trigger>
    <Popover.Content isPrimary>
        <div style={{ height: "150px" }}>
            <Placeholder>
                <Icon isMedium>
                    <Icon.Image />
                </Icon>
            </Placeholder>
        </div>
        <p><strong>Primary</strong></p>
        <p>Nullam nec diam velit. Duis pulvinar, mi at...</p>
        <Button isLight isLowercase>
            Quisque hendrerit
        </Button>
    </Popover.Content>
</Popover>
`;

export const popoverText = `
import { Popover } from '@nulib/design-system';

<Popover>
    <Popover.Trigger>
        <a href="#">Text Popover</a>
    </Popover.Trigger>
    <Popover.Content>
        <p>Fusce augue eros, convallis eget nunc...</p>
    </Popover.Content>
</Popover>
`;
