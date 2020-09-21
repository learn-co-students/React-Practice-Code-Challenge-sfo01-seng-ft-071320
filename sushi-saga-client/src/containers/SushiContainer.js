import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
          props.sushis.map((sushi) => {
            return (
              <Sushi
                sushi={sushi}
                key={sushi.id}
                eat={props.eat}
                taken={props.eaten.includes(sushi)}
              />
            );
          })
        }
        <MoreButton more={props.more} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
