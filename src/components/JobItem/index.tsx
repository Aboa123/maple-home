import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

type JobItemProps = {
  title: string;
  contents: React.ReactNode;
};

const JobItem = (props: JobItemProps) => {
  return (
    <Layout
      style={{
        minHeight: 150,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "gray",
        borderTopStyle: "solid",
        borderBottomStyle: "solid",
        boxSizing: "content-box",
      }}
    >
      <Sider
        style={{
          backgroundColor: "#30353f",
          textAlign: "center",
          fontSize: 25,
          lineHeight: "150px",
          color: "#FFF",
        }}
      >
        <span>{props.title}</span>
      </Sider>
      <Content style={{ padding: "4px 8px" }}>{props.contents}</Content>
    </Layout>
  );
};

export default JobItem;
