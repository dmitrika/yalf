import { pages } from "../Page";
import { Page } from "../Page";

export function Welcome({ setCurrentPage }) {
  return (
    <Page title="Welcome to your space">
      <button className="button" onClick={() => setCurrentPage(pages.login)}>
        Log out
      </button>
    </Page>
  );
}
