import { Space } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import data, { species } from "../../common/data";
import CharaterBox from "../../components/charaterBox";
import JobItem from "../../components/JobItem";

const Main = () => {
  const onPress = () => {};

  return (
    <Space
      style={{
        padding: 16,
        flexGrow: 1,
        backgroundColor: "",
      }}
      direction="vertical"
    >
      <Header style={{ fontSize: 50, width: "100%", textAlign: "center" }}>
        메이플스토리 나의 직업 찾기
      </Header>
      <Content>ㅇㅇ</Content>
      <Content style={{ flex: 1 }}>
        {Object.values(species).map((item, index) => (
          <JobItem
            key={item}
            title={item}
            contents={
              <Content
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  gap: 8,
                }}
              >
                {data
                  .filter((innerItem) => innerItem.species === item)
                  .map((i) => (
                    <CharaterBox
                      key={i.name}
                      image={i.image}
                      name={i.name}
                      onPress={onPress}
                    />
                  ))}
              </Content>
            }
          />
        ))}
      </Content>
    </Space>
  );
};

export default Main;
