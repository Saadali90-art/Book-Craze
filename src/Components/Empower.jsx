import { useParams } from "react-router-dom";
import Discover from "../Components/subcomponent/6.Empower/Discover";
import Writing from "../Components/subcomponent/6.Empower/Writing";
import Mission from "../Components/subcomponent/6.Empower/Mission";

const Empower = () => {
  let { id } = useParams();

  if (id === "discover new worlds") {
    return <Discover />;
  } else if (id === "our purpose & plans") {
    return <Mission />;
  } else if (id === "become a writer") {
    return <Writing />;
  }
};

export default Empower;
