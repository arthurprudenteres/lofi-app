import { dados } from "./utilities/dados";
import Container from "./components/Container";
import Header from "./components/Header";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Footer from "./components/Footer";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="w-full h-full bg-black/90 mx-auto pb-10">
      <Wrapper bgColor="bg-transparent">
        <Container maxWidth="max-w-[1200px]" mx="mx-auto" px="px-5">
          <Header />
        </Container>
      </Wrapper>
      <Container maxWidth="max-w-[1200px]" mx="mx-auto" px="px-5">
        <Title>
          <span>relax.</span>
          <span>chill.</span>
          <span>enjoy.</span>
        </Title>
        <CardContainer>
          {dados.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              audioSrc={item.audioSrc}
              glow={item.glow}
              barFrom={item.barFrom}
              barTo={item.barTo}
            />
          ))}
        </CardContainer>
        <Footer>Built with React, Tailwind & ❤️</Footer>
      </Container>
    </div>
  );
}

export default App;
