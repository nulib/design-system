import { Button } from "components/Button/Button";
import { Icon } from "components/Icon/Icon";
import PrismWrapper from "components/PrismWrapper";
import { buttonIcon as code } from "./code-samples";
import { Block } from "components/Block/Block";

const IconButton: React.FC = () => {
  return (
    <>
      <Block>
        <Button>
          <Icon isSmall>
            <Icon.Add />
          </Icon>
          <span>Add Item</span>
        </Button>
      </Block>

      <h3>Example usage</h3>
      <PrismWrapper code={code} />
    </>
  );
};

export default IconButton;
