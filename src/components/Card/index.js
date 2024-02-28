import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

// function Card({ title, par }) {
//   return (
//     <di className="Card">
//       <h6>{title}</h6>
//       <p>{par}</p>
//       <button>Devamı</button>
//     </di>
//   );
// }
//Arrow fonksiyon yukardakinin aynısı
const CardComponent = ({ title, par, lesson, index }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        {/* <Badge color="pink">On Sale</Badge> */}
      </Group>

      <Text size="sm" c="dimmed">
        {par}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
};
export default CardComponent;
