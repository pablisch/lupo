import React from 'react';
import {ReactComponent as Map} from '../../assets/Tube.svg';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import "./TubeMap.css";

const TubeMap = () => {
  return (
    <main>
      <TransformWrapper
        disablePadding={false}
        // centerOnInit={false}
        initialScale={1.7}
        initialPositionX={-400}
        initialPositionY={-300}>
        <TransformComponent wrapperStyle={{
            width: "100%",
            height: "100%",
          }}
          contentStyle={{ width: "100%", height: "100%" }}>
          <Map />
        </TransformComponent>
      </TransformWrapper>
    </main>
  );
}
export default TubeMap;