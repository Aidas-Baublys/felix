import { Layout, Hero, Button, ContentBox } from "./components";

import "./index.scss";

export default function App() {
  return (
    <Layout>
      <Hero title="More binge?">
        <Button>Get Access</Button>
      </Hero>
      <ContentBox poster="" name="" description="">
        <Button>Favorite</Button>
      </ContentBox>
      <Button style="margin">More Binge</Button>
    </Layout>
  );
}
