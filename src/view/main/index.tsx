import { StarOutlined } from "@ant-design/icons";
import { StarFilled } from "@ant-design/icons/lib/icons";
import { Button, Form, Radio, Space } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useState } from "react";
import data, { species } from "../../common/data";
import CharaterBox from "../../components/charaterBox";
import JobItem from "../../components/JobItem";

const Main = () => {
  const [form] = Form.useForm();
  const [tableType, setTableType] = useState<"group" | "job" | undefined>(
    "group"
  );
  const [weaponType, setWeaponType] = useState<"one" | "two" | undefined>(
    "one"
  );
  const [pay, setPay] = useState<"high" | "middle" | "row" | undefined>("high");
  const [boss, setBoss] = useState<"1" | "2" | "3" | "4" | "5" | undefined>();
  const [hunt, setHunt] = useState<"1" | "2" | "3" | "4" | "5" | undefined>();
  const [oneKill, setOneKill] = useState<
    "high" | "middle" | "row" | undefined
  >();
  const [core, setCore] = useState<"1" | "2" | "3" | "4" | "5" | undefined>();
  const [stat, setStat] = useState<
    "str" | "int" | "dex" | "luk" | "hp" | undefined
  >("str");
  const [difficulty, setDifficulty] = useState<
    "1" | "2" | "3" | "4" | "5" | undefined
  >();
  const [utili, setUtili] = useState<"1" | "2" | "3" | "4" | "5" | undefined>();
  const [damageTime, setDamageTime] = useState<
    120 | 180 | 200 | "none" | undefined
  >();

  const onPress = () => {};

  const onFormLayoutChange = (e: any) => {
    setTableType(e.jobTable);
    setWeaponType(e.weaponType);
    setPay(e.pay);
    e.core && setCore(e.core);
    e.difficulty && setDifficulty(e.difficulty);
    e.boss && setBoss(e.boss);
    e.hunt && setHunt(e.hunt);
    setStat(e.stat);
    setDamageTime(e.damageTime);
  };

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
      <Content>
        <Form
          onValuesChange={onFormLayoutChange}
          labelCol={{
            span: 4,
          }}
          size={"large"}
        >
          <Form.Item label="테이블 타입" name="jobTable">
            <Radio.Group value={tableType}>
              <Radio.Button value="group">그룹별</Radio.Button>
              <Radio.Button value="job">직업별</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="무기" name="weaponType">
            <Radio.Group value={weaponType}>
              <Radio.Button value={undefined}>전체</Radio.Button>
              <Radio.Button value="one">한손</Radio.Button>
              <Radio.Button value="two">두손</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="주스탯" name="stat">
            <Radio.Group value={stat}>
              <Radio.Button value={undefined}>전체</Radio.Button>
              <Radio.Button value="str">힘 (STR)</Radio.Button>
              <Radio.Button value="int">지능 (INT)</Radio.Button>
              <Radio.Button value="dex">민첩 (DEX)</Radio.Button>
              <Radio.Button value="luk">운 (LUK)</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="자본" name="pay">
            <Radio.Group value={pay}>
              <Radio.Button value={undefined}>전체</Radio.Button>
              <Radio.Button value="high">고자본</Radio.Button>
              <Radio.Button value="middle">중자본</Radio.Button>
              <Radio.Button value="row">저자본</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="사냥원킬컷" name="oneKill">
            <Radio.Group value={oneKill}>
              <Radio.Button value={undefined}>전체</Radio.Button>
              <Radio.Button value="high">높음</Radio.Button>
              <Radio.Button value="middle">중간</Radio.Button>
              <Radio.Button value="row">낮음</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="사냥등급" name="hunt">
            <Button.Group>
              {[...Array(5)].map((_, i) => (
                <Button
                  key={i}
                  type="text"
                  onClick={() =>
                    setHunt(
                      hunt !== undefined && hunt === String(i + 1)
                        ? undefined
                        : (String(i + 1) as any)
                    )
                  }
                >
                  {Number(hunt ?? 0) < i + 1 ? (
                    <StarOutlined style={{ fontSize: 25 }} />
                  ) : (
                    <StarFilled
                      style={{ color: "yellowgreen", fontSize: 25 }}
                    />
                  )}
                </Button>
              ))}
            </Button.Group>
          </Form.Item>
          <Form.Item label="보스등급" name="boss">
            <Button.Group>
              {[...Array(5)].map((_, i) => (
                <Button
                  key={i}
                  type="text"
                  onClick={() =>
                    setBoss(
                      boss !== undefined && boss === String(i + 1)
                        ? undefined
                        : (String(i + 1) as any)
                    )
                  }
                >
                  {Number(boss ?? 0) < i + 1 ? (
                    <StarOutlined style={{ fontSize: 25 }} />
                  ) : (
                    <StarFilled
                      style={{ color: "yellowgreen", fontSize: 25 }}
                    />
                  )}
                </Button>
              ))}
            </Button.Group>
          </Form.Item>
          <Form.Item label="코어강화 난이도" name="core">
            <Button.Group>
              {[...Array(5)].map((_, i) => (
                <Button
                  key={i}
                  type="text"
                  onClick={() =>
                    setCore(
                      core !== undefined && core === String(i + 1)
                        ? undefined
                        : (String(i + 1) as any)
                    )
                  }
                >
                  {Number(core ?? 0) < i + 1 ? (
                    <StarOutlined style={{ fontSize: 25 }} />
                  ) : (
                    <StarFilled
                      style={{ color: "yellowgreen", fontSize: 25 }}
                    />
                  )}
                </Button>
              ))}
            </Button.Group>
          </Form.Item>
          <Form.Item label="조작 난이도" name="difficulty">
            <Button.Group>
              {[...Array(5)].map((_, i) => (
                <Button
                  key={i}
                  type="text"
                  onClick={() =>
                    setDifficulty(
                      difficulty !== undefined && difficulty === String(i + 1)
                        ? undefined
                        : (String(i + 1) as any)
                    )
                  }
                >
                  {Number(difficulty ?? 0) < i + 1 ? (
                    <StarOutlined style={{ fontSize: 25 }} />
                  ) : (
                    <StarFilled
                      style={{ color: "yellowgreen", fontSize: 25 }}
                    />
                  )}
                </Button>
              ))}
            </Button.Group>
          </Form.Item>
          <Form.Item label="유틸리티" name="util">
            <Button.Group>
              {[...Array(5)].map((_, i) => (
                <Button
                  key={i}
                  type="text"
                  onClick={() =>
                    setUtili(
                      utili !== undefined && utili === String(i + 1)
                        ? undefined
                        : (String(i + 1) as any)
                    )
                  }
                >
                  {Number(utili ?? 0) < i + 1 ? (
                    <StarOutlined style={{ fontSize: 25 }} />
                  ) : (
                    <StarFilled
                      style={{ color: "yellowgreen", fontSize: 25 }}
                    />
                  )}
                </Button>
              ))}
            </Button.Group>
          </Form.Item>
          <Form.Item label="극딜주기" name="damageTime">
            <Radio.Group value={damageTime}>
              <Radio.Button value={undefined}>전체</Radio.Button>
              <Radio.Button value={120}>120초</Radio.Button>
              <Radio.Button value={180}>180초</Radio.Button>
              <Radio.Button value={200}>200초</Radio.Button>
              <Radio.Button value="none">복합적</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Content>
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
