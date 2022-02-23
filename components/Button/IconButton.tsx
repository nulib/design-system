import { Button } from "components/Button/Button";
import { Icon } from "components/Icon";
import PrismWrapper from "components/PrismWrapper";

const IconButton: React.FC = () => {
  return (
    <>
      <Button>
        <Icon isSmall>
          <Icon.Add />
        </Icon>
        <span>Add Item</span>
      </Button>

      <PrismWrapper code={codeSamples.buttonIcon} />
    </>
  );
};

export default IconButton;
