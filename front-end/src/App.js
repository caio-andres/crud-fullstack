import GlobalStyle from "./styles/global.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactTostify.css";

import Form from "./components/Form/Form.js";
import { Container, Title } from "./App-style.js";

function App() {
  return (
    <>
      <Container>
        <Title>USERS</Title>
        <Form />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
