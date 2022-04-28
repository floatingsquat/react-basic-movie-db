import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1>About Page</h1>
      <Link className="btn-back" to="/">
        <FaArrowAltCircleLeft /> Go back
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget
        lectus sed enim iaculis imperdiet sit amet sed nisi. Vestibulum et
        hendrerit nisi. Aliquam ac commodo risus, aliquam malesuada leo. Proin
        eu ante placerat, hendrerit lectus sed, semper dolor. Nunc placerat ut
        ex sit amet lacinia. Pellentesque eget feugiat neque. Vivamus iaculis ex
        nec neque commodo, at laoreet lacus <b>condimentum</b>. Duis vulputate
        pellentesque risus, vel accumsan enim fringilla eget. Ut maximus, velit
        eget varius faucibus, augue diam porta est, eget dignissim sapien libero
        a nulla. Pellentesque at euismod augue, et dignissim risus. Curabitur
        vitae nisl in ex posuere ullamcorper. In hac habitasse platea dictumst.
        Mauris vel sodales ligula. Sed ac tempus arcu.
      </p>
      <p>
        Quisque accumsan pretium vulputate. Etiam eget libero purus. Maecenas
        pretium neque non quam sollicitudin, quis porta quam euismod. Aliquam
        sit amet dolor ullamcorper, vestibulum neque vulputate, finibus massa.
        Sed vehicula, libero at luctus convallis, nisi ipsum vehicula velit, in
        ultricies orci lorem vel tellus. Nulla tempor dolor id justo laoreet
        viverra. Phasellus ullamcorper suscipit libero. Donec vestibulum, augue
        in gravida tempor, erat risus scelerisque est, a suscipit felis neque at
        lacus. Nam nec dignissim elit. Integer vitae aliquet lacus. Aliquam
        malesuada fringilla ultricies. Ut vel turpis et eros hendrerit venenatis
        ut ac orci. Donec pellentesque vehicula nulla ut mollis.
      </p>
    </div>
  );
}

export default About;
