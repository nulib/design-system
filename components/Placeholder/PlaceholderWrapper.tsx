import { Placeholder } from "components/Placeholder/Placeholder";
import { Icon } from "components/Icon/Icon";
import PrismWrapper from "components/PrismWrapper";
import { placeholder as code } from "./code-examples";

const PlaceholderWrapper: React.FC = () => {
  return (
    <>
      <div style={{ width: "200px", height: "200px" }}>
        <Placeholder>
          <Icon isMedium>
            <Icon.Title>Audio Work</Icon.Title>
            <Icon.Audio />
          </Icon>
        </Placeholder>
      </div>
      <div style={{ width: "200px", height: "200px" }}>
        <Placeholder>
          <strong>Oops</strong> There should be something here.
        </Placeholder>
      </div>
      <div style={{ width: "200px", height: "200px" }}>
        <Placeholder>
          <img
            alt="Scouts"
            src="https://iiif.stack.rdc.library.northwestern.edu/iiif/2/ff2f57ff-6952-4ea6-b55b-ae2a76c13efc/full/600,/0/default.jpg"
          />
        </Placeholder>
      </div>

      <h3>Example usage</h3>
      <PrismWrapper code={code} />
    </>
  );
};

export default PlaceholderWrapper;
