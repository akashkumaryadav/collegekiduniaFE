import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const FullPageLoader = () => {
  return (
    <div>
      <Segment
        className="container mx-auto"
        style={{ height: "90vh", width: "98vw" }}
      >
        <Dimmer active inverted>
          <Loader inverted content="loding....." size="huge" />
        </Dimmer>
      </Segment>
    </div>
  );
};

export default FullPageLoader;
