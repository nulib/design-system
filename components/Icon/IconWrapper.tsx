import { Icon } from "components/Icon/Icon";
import { icon as code } from "./code-samples";
import PrismWrapper from "components/PrismWrapper";
import PropsTable from "components/PropsTable";

const IconWrapper: React.FC = () => {
  return (
    <>
      <Icon isSmall>
        <Icon.Title>Audio Work</Icon.Title>
        <Icon.Audio />
      </Icon>
      <Icon isMedium>
        <Icon.Title>Audio Work</Icon.Title>
        <Icon.Video />
      </Icon>
      <Icon isLarge>
        <Icon.Title>Image Work</Icon.Title>
        <Icon.Image />
      </Icon>

      <h3>Example usage</h3>
      <PrismWrapper code={code} />

      <h3>Props</h3>
      <PropsTable
        items={[
          {
            name: "isSmall?",
            description: "Icon size (1x1)",
            type: "boolean",
          },
          {
            name: "isMedium?",
            description: "Icon size (2x2)",
            type: "boolean",
          },
          {
            name: "isLarge?",
            description: "Icon size (4x4)",
            type: "boolean",
          },
        ]}
      />
      <PropsTable
        items={[
          {
            name: "Add",
            description: (
              <Icon isMedium>
                <Icon.Title>Add</Icon.Title>
                <Icon.Add />
              </Icon>
            ),
            type: "<Icon.Add />",
          },
          {
            name: "Audio",
            description: (
              <Icon isMedium>
                <Icon.Title>Audio</Icon.Title>
                <Icon.Audio />
              </Icon>
            ),
            type: "<Icon.Audio />",
          },
          {
            name: "Close",
            description: (
              <Icon isMedium>
                <Icon.Title>Close</Icon.Title>
                <Icon.Close />
              </Icon>
            ),
            type: "<Icon.Close />",
          },
          {
            name: "Image",
            description: (
              <Icon isMedium>
                <Icon.Title>Image</Icon.Title>
                <Icon.Image />
              </Icon>
            ),
            type: "<Icon.Image />",
          },
          {
            name: "Video",
            description: (
              <Icon isMedium>
                <Icon.Title>Video</Icon.Title>
                <Icon.Video />
              </Icon>
            ),
            type: "<Icon.Video />",
          },
        ]}
      />
    </>
  );
};

export default IconWrapper;
