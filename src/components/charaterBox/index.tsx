import { Image } from "antd";

type CharaterBoxProps = {
  name: string;
  image: NodeModule;
  onPress: () => void;
};

const CharaterBox = (props: CharaterBoxProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid black",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#30353f",
      }}
      onClick={props.onPress}
    >
      <Image
        src={props.image as any}
        style={{
          width: 150,
          height: 250,
          objectFit: "cover",
          transform: "scale(1.2)",
        }}
        preview={false}
      />
      <span
        style={{
          display: "flex",
          backgroundColor: "#000",
          color: "#FFF",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          height: 35,
          fontSize: 20,
        }}
      >
        {props.name}
      </span>
    </div>
  );
};
export default CharaterBox;
