// import logo from "./logo.svg";
import { Container, Grid, Stack, Button, Input, Textarea } from "@mantine/core";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

// const kare = (sayi) => sayi * sayi;
const App = () => {
  const [title, setTitle] = useState("");
  const [paragraf, setParagraph] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      title: "Dağ 1",
      par: "Açıklama 1",
    },
    {
      id: 2,
      title: "Dağ 2",
      par: "Açıklama 2",
    },
    {
      id: 3,
      title: "Dağ 3",
      par: "Açıklama 3",
    },
  ]);
  const click = () => {
    if (!title.trim() || !paragraf.trim()) {
      alert("Başlık ve paragraf alanları boş bırakılamaz.");
      return;
    }

    console.log("Butona tıklandı", title, paragraf);
    setTitle("");
    setParagraph("");

    setList([
      ...list,
      {
        id: 5,
        title,
        par: paragraf,
      },
    ]);
  };
  return (
    <Container>
      <h1>Kart Oluşturma Programı</h1>
      <Stack>
        <Input.Wrapper label="Paragraf">
          <Input
            placeholder="Başlık yazınız"
            width={400}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input.Wrapper>

        <Textarea
          label="Paragraf"
          placeholder="Paragraf"
          value={paragraf}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <Button variant="outline" onClick={click}>
          Kart Oluştur
        </Button>
      </Stack>
      <h2>Kartlar</h2>
      <Grid>
        {list.map(({ title, par }, i) => (
          <Grid.Col span={4} key={`index ${i}`}>
            <Card
              title={title}
              par={par}
              i={i}
              click={() => {
                let copyList = [...list];
                copyList.splice(i, 1);
                setList(copyList);
                console.log("Dışardan tıklanıldı");
              }}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
