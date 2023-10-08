import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            I'm baby man bun DSA fingerstache, heirloom activated charcoal tacos
            echo park skateboard sartorial venmo. Big mood yes plz poke crucifix
            narwhal tote bag meditation kogi artisan. 3 wolf moon roof party
            jean shorts, JOMO tousled messenger bag mustache pickled leggings
            pabst. Hell of venmo iceland, thundercats cold-pressed artisan ugh
            la croix chambray disrupt normcore meh affogato vinyl. Leggings
            quinoa 90's flannel. Franzen authentic kombucha hashtag sus banjo
            try-hard chambray gatekeep chia vibecession food truck street art.
          </p>
          <Link to={`/register`} className="btn register-link">
            Register
          </Link>
          <Link to={`/login`} className="btn">
            Login/ Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
