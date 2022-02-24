import { Notification } from "components/Notification/Notification";
import PrismWrapper from "components/PrismWrapper";
import PropsTable from "components/PropsTable";
import { notification as code } from "components/Notification/code-samples";
import { Block } from "components/Block/Block";

const NotificationWrapper = () => {
  return (
    <>
      <Block>
        <Notification isClosable>
          <p>
            <strong>Hey</strong>
          </p>
          <p>
            Some message goes here and this is the default notification
            color/style
          </p>
        </Notification>
        <Notification isSuccess>
          You have successfully completed some action
        </Notification>
        <Notification isInfo isCentered>
          An info message. We might not even need this? But it shows
          notifications can be centered too
        </Notification>
        <Notification isWarning isClosable>
          Warning: You can add a close button with the `isClosable` prop
        </Notification>
        <Notification isDanger>Danger: this could be destructive</Notification>
      </Block>

      <h3>Example usage</h3>
      <PrismWrapper code={code} />

      <h3>Props</h3>
      <PropsTable
        items={[
          {
            name: "isDanger?",
            description: "Color style",
            type: "boolean",
          },
          {
            name: "isCentered?",
            description: "Center the content of the Notification",
            type: "boolean",
          },
          {
            name: "isClosable?",
            description:
              "Adds a close button, which lets the user close a Notification",
            type: "boolean",
          },
          {
            name: "isInfo?",
            description: "Color style",
            type: "boolean",
          },
          {
            name: "isSuccess?",
            description: "Color style",
            type: "boolean",
          },
          {
            name: "isWarning?",
            description: "Color style",
            type: "boolean",
          },
        ]}
      />
    </>
  );
};

export default NotificationWrapper;
