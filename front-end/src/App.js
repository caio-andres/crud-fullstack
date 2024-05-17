import GlobalStyle from "./styles/global.js";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Form from "./components/Form/Form.js";
import Grid from "./components/Grid/Grid.js";
import { Container, Title } from "./App-style.js";

function App() {
  return (
    <>
      <Container>
        <Title>USERS</Title>
        <Form />
        <Grid />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
