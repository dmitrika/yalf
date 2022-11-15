import { Page } from "../Page";
import { Form } from "../Form";

export function Login({ API, setCurrentPage }) {
  return (
    <Page title="Log into Account">
      <Form API={API} setCurrentPage={setCurrentPage} />
    </Page>
  );
}
