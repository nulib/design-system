import { Popover } from "./Popover";
import PrismWrapper from "../PrismWrapper";
import { popoverText as code } from "./code-samples";

const TextTriggerPopover: React.FC = () => {
  return (
    <>
      <Popover>
        <Popover.Trigger aria-controls="text-popover">
          <a style={{ color: "#4e2a84", fontSize: "1rem" }}>Text Popover</a>
        </Popover.Trigger>
        <Popover.Content id="text-popover">
          <p
            style={{
              lineHeight: "1.75rem",
            }}
          >
            Fusce augue eros, convallis eget nunc a, dictum condimentum nunc.
            Vestibulum pulvinar risus et eleifend placerat. Nullam vel interdum
            felis. Aliquam vitae lorem vitae orci pretium aliquet.
          </p>
        </Popover.Content>
      </Popover>

      <PrismWrapper code={code} />
    </>
  );
};

export default TextTriggerPopover;
