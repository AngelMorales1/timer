import { UseGeneralContext } from "../store/store";
import HomePage from "../views/home/index";

export default function Home() {
  return (
    <>
      <UseGeneralContext>
        <HomePage />
      </UseGeneralContext>
    </>
  );
}
