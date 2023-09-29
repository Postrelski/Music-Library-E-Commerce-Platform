import "./LeftView.css";

function LefftView(props) {
  return (
    <div className="leftViewContainer">
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/923446723&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <p>
        Inspired by the sounds of artists like Kaytranada, Disclosure, Pomo,
        FKJ, Jerry Folk & more, SOULECT for Serum is a high quality collection
        of presets for soulful electronic music. A versatile collection of Keys,
        Pads, Bass and Leads are included and are a modern interpretation of
        vintage analog and digital synths & keyboards from the 80's and 90's.
        Perfect for production in a variety of genres such as R&B, Soul, Hip
        Hop, House & Pop these presets make use of my own custom made wavetables
        which sample real instruments, analog synths & samplers. Each preset
        comes with all 4 macros preassigned to key parameters, giving you lots
        of easy control over the sound and the ability to tweak the sound to fit
        your own needs.
      </p>
      <br></br>
      <p>In total SOULECT includes:</p>
      <br></br>
      <ul>
        <li>20 Keys</li>
        <li>15 Basses</li>
        <li>10 Pads</li>
        <li>10 Leads</li>
      </ul>
    </div>
  );
}

export default LefftView;
