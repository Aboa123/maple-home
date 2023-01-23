import { StarOutlined } from "@ant-design/icons";
import { StarFilled } from "@ant-design/icons/lib/icons";
import { Button, Form, Radio, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useRef, useState } from "react";
import data, { jobGroup, species, weaponType } from "../../common/data";
import CharaterBox from "../../components/charaterBox";
import JobItem from "../../components/JobItem";

const Main = () => {
  const [form] = Form.useForm();
  const [charaters, setCharaters] = useState(data);

  const formRef = useRef<any>(undefined);

  const [tableType, setTableType] = useState<"group" | "job" | undefined>(
    "group"
  );
  const [weapon, setWeapon] = useState<"one" | "two" | "all">("all");
  const [pay, setPay] = useState<"high" | "middle" | "row" | "all">("all");
  const [boss, setBoss] = useState<1 | 2 | 3 | 4 | 5 | "all">("all");
  const [hunt, setHunt] = useState<1 | 2 | 3 | 4 | 5 | "all">("all");
  const [oneKill, setOneKill] = useState<"high" | "middle" | "row" | "all">(
    "all"
  );
  const [core, setCore] = useState<1 | 2 | 3 | 4 | 5 | "all">("all");
  const [stat, setStat] = useState<
    "힘" | "지능" | "민첩" | "행운" | "체력" | "all"
  >("all");
  const [difficulty, setDifficulty] = useState<1 | 2 | 3 | 4 | 5 | "all">(
    "all"
  );
  const [utili, setUtili] = useState<1 | 2 | 3 | 4 | 5 | "all">("all");
  const [damageTime, setDamageTime] = useState<
    120 | 180 | 200 | "none" | "all"
  >("all");

  const onPress = () => {};

  const onReset = () => {
    formRef.current.setFieldsValue({
      weapon: "all",
      stat: "all",
      pay: "all",
      oneKill: "all",
      hunt: "all",
      boss: "all",
      core: "all",
      difficulty: "all",
      utili: "all",
      damageTime: "all",
    });
    setWeapon("all");
    setStat("all");
    setPay("all");
    setOneKill("all");
    setHunt("all");
    setBoss("all");
    setCore("all");
    setDifficulty("all");
    setUtili("all");
    setDamageTime("all");
  };

  const onFormLayoutChange = (e: any) => {
    e.jobTable && setTableType(e.jobTable);
    e.weapon && setWeapon(e.weapon);
    e.pay && setPay(e.pay);
    e.stat && setStat(e.stat);
    e.damageTime && setDamageTime(e.damageTime);
    e.oneKill && setOneKill(e.oneKill);

    if (e.weapon) {
      setCharaters((prev) => prev.filter(() => e.weapon === "all"));
    }
  };

  const dataFilter = (mainFilter: string) => {
    return (
      data
        .filter((item) => {
          let inner = tableType === "group" ? item.species : item.jobGroup;
          return inner === mainFilter;
        })
        // 무기
        .filter((item) => {
          if (weapon === "one") {
            return item.weapon
              .map((inner) => Object.values(weaponType.one).includes(inner))
              .includes(true);
          }
          if (weapon === "two") {
            return item.weapon
              .map((inner) => Object.values(weaponType.two).includes(inner))
              .includes(true);
          }
          return item;
        })
        // 주스탯
        .filter((item) => {
          if (stat !== "all") {
            return item.stat === stat;
          }
          return item;
        })
        // 자본
        .filter((item) => {
          if (pay !== "all") {
            return item.pay === pay;
          }
          return item;
        })
        // 사냥원킬
        .filter((item) => {
          if (oneKill !== "all") {
            return item.oneKill === oneKill;
          }
          return item;
        })
        // 사냥등급
        .filter((item) => {
          if (hunt !== "all") {
            return item.hunt === hunt;
          }
          return item;
        })
        // 보스등급
        .filter((item) => {
          if (boss !== "all") {
            return item.boss === boss;
          }
          return item;
        })
        // 코강난이도
        .filter((item) => {
          if (core !== "all") {
            return item.core === core;
          }
          return item;
        })
        // 조작난이도
        .filter((item) => {
          if (difficulty !== "all") {
            return item.difficulty === difficulty;
          }
          return item;
        })
        // 유틸리티
        .filter((item) => {
          if (utili !== "all") {
            return item.utili === utili;
          }
          return item;
        })
        // 극딜주기
        .filter((item) => {
          if (damageTime !== "all") {
            return item.damageTime === damageTime;
          }
          return item;
        })
        .map((i) => (
          <CharaterBox
            key={i.name}
            image={i.image}
            name={i.name}
            onPress={onPress}
          />
        ))
    );
  };

  return (
    <Space
      style={{
        flexGrow: 1,
        backgroundColor: "",
      }}
      direction="vertical"
    >
      <Header
        style={{
          fontSize: 50,
          width: "100%",
          textAlign: "center",
          padding: 16,
        }}
      >
        메이플스토리 나의 직업 찾기
      </Header>
      <Content style={{ padding: 16 }}>
        <Form
          ref={formRef}
          onValuesChange={onFormLayoutChange}
          labelCol={{
            span: 4,
          }}
          size={"large"}
          initialValues={{
            jobTable: tableType,
            weapon,
            stat,
            pay,
            oneKill,
            hunt,
            boss,
            core,
            difficulty,
            utili,
            damageTime,
          }}
        >
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button danger onClick={onReset}>
              초기화
            </Button>
          </Form.Item>
          <Form.Item label="테이블 타입" name="jobTable">
            <Radio.Group value={tableType}>
              <Radio.Button value="group">그룹별</Radio.Button>
              <Radio.Button value="job">직업별</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="무기" name="weapon">
            <Radio.Group value={weapon}>
              <Radio.Button value={"all"}>전체</Radio.Button>
              <Radio.Button value="one">한손</Radio.Button>
              <Radio.Button value="two">두손</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="주스탯" name="stat">
            <Radio.Group value={stat}>
              <Radio.Button value={"all"}>전체</Radio.Button>
              <Radio.Button value="힘">힘 (STR)</Radio.Button>
              <Radio.Button value="지능">지능 (INT)</Radio.Button>
              <Radio.Button value="민첩">민첩 (DEX)</Radio.Button>
              <Radio.Button value="행운">행운 (LUK)</Radio.Button>
              <Radio.Button value="체력">체력 (HP)</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="자본" name="pay">
            <Radio.Group value={pay}>
              <Radio.Button value={"all"}>전체</Radio.Button>
              <Radio.Button value="high">고자본</Radio.Button>
              <Radio.Button value="middle">중자본</Radio.Button>
              <Radio.Button value="row">저자본</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="사냥원킬컷" name="oneKill">
            <Radio.Group value={oneKill}>
              <Radio.Button value={"all"}>전체</Radio.Button>
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
                      hunt !== "all" && hunt === i + 1
                        ? "all"
                        : ((i + 1) as any)
                    )
                  }
                >
                  {hunt === "all" || Number(hunt) < i + 1 ? (
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
                      boss !== "all" && boss === i + 1
                        ? "all"
                        : ((i + 1) as any)
                    )
                  }
                >
                  {boss === "all" || Number(boss) < i + 1 ? (
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
                      core !== "all" && core === i + 1
                        ? "all"
                        : ((i + 1) as any)
                    )
                  }
                >
                  {core === "all" || Number(core) < i + 1 ? (
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
                      difficulty !== "all" && difficulty === i + 1
                        ? "all"
                        : ((i + 1) as any)
                    )
                  }
                >
                  {difficulty === "all" || Number(difficulty) < i + 1 ? (
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
                      utili !== "all" && utili === i + 1
                        ? "all"
                        : ((i + 1) as any)
                    )
                  }
                >
                  {utili === "all" || Number(utili) < i + 1 ? (
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
              <Radio.Button value={"all"}>전체</Radio.Button>
              <Radio.Button value={120}>120초</Radio.Button>
              <Radio.Button value={180}>180초</Radio.Button>
              <Radio.Button value={200}>200초</Radio.Button>
              <Radio.Button value="none">복합적</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Content>
      <Content style={{ flex: 1 }}>
        {Object.values(tableType === "group" ? species : jobGroup).map(
          (item) => (
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
                  {dataFilter(item)}
                </Content>
              }
            />
          )
        )}
      </Content>
      <Footer
        style={{ height: 180, paddingTop: 16, backgroundColor: "#ECECDF" }}
      >
        <p>Discord Aboa#9076</p>
        <p>오로라 짱손카이저</p>
        <p>유튜브 참고하면서 만들었음</p>
        <p>데이터 수정, 기능추가요청, 오류제보는 디스코드로 부탁드림</p>
      </Footer>
    </Space>
  );
};

export default Main;
