import "./styles/LeftView.css";

// this will be set with props for each item...

function LefftView(props) {
  return (
    <div className="leftViewContainer">
      <hr className="soundcloud_line"></hr>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/923446723&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div className="soundcloud_footer">SynthHacker · SOULECT for Serum</div>
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

      <p>In total SOULECT includes:</p>

      <ul>
        <li>20 Keys</li>
        <li>15 Basses</li>
        <li>10 Pads</li>
        <li>10 Leads</li>
      </ul>

      <p>
        90+ Bonus Tutorial Presets included (Presets from videos that aren't
        from products)
      </p>
      <p>
        Also included is the free SynthHacker Essentials bundle containing all
        my custom wavetables, template presets, noise files & tutorial MIDI.
      </p>
      <p>Requires a copy of Xfer Serum v1.306 or later.</p>
    </div>
  );
}

export default LefftView;
