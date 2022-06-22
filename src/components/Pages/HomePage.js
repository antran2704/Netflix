import { useSelector } from "react-redux";
import ButtonToTop from "../buttonToTop/ButtonToTop";
import Content from "../content/Content";
import Intro from "../intro/Intro";
import Menu from "../menu/Menu";
import Modal from "../modal/Modal";

function HomePage() {
  const { GetmoviesDetail } = useSelector((state) => state.infoMovies);
  console.log(GetmoviesDetail)
  return (
    <div>
      <Intro />
      <Content />
      <Menu />
      <ButtonToTop />
      <Modal movie={GetmoviesDetail} show={GetmoviesDetail ? true : false} />
    </div>
  );
}

export default HomePage;
