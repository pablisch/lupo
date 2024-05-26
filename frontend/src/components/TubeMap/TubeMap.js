import { ReactComponent as Map } from '../../assets/Tube.svg';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './TubeMap.css';

const TubeMap = () => {
  return (
    <main>
      <div className="map-wrapper">
        <TransformWrapper
          disablePadding={false}
          initialScale={1.7}
          initialPositionX={0}
          initialPositionY={0}
        >
          <TransformComponent wrapperStyle={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          contentStyle={{
            width: "100%",
            height: "100%",
            transformOrigin: "center",
            position: "absolute"
          }}>
            <Map />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </main>
  );
}

export default TubeMap;
