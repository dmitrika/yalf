import { Page } from "../Page";
import { Form } from "../Form";

export function Login({ API, setCurrentPage }) {
  return (
    <Page title="Log in to Account">
      <Form API={API} setCurrentPage={setCurrentPage} />
    </Page>
  );
}
