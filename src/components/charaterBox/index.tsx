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
        cursor: "pointer",
      }}
      onClick={props.onPress}
    >
      <Image
        src={props.image as any}
        style={{ width: 150, height: 250, objectFit: "cover" }}
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
          fontSize: 25,
        }}
      >
        {props.name}
      </span>
    </div>
  );
};
export default CharaterBox;
