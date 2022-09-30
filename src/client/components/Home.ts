import { GitBranchesComp } from "./GitBranches";
import { Header } from "./Header";
import { JavaVersionComp } from "./JavaVersion";
import { LibsComp } from "./Libs";
import { Ports } from "./Ports";

interface Props {
  withHeader?: boolean;
}

async function Home(props: Props = {}): Promise<string> {
  const { withHeader } = props;

  const elements = await Promise.all([
    withHeader ? Header() : "",
    Ports({ withHeader: false }),
    GitBranchesComp({ withHeader: false }),
    LibsComp({ withHeader: false }),
    JavaVersionComp({ withHeader: false }),
  ]);
  return elements.join("");
}

export default Home;
