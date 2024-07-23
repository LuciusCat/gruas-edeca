const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <radialGradient
        id="radial-gradient"
        cx={-578.95}
        cy={-837.6}
        r={197.06}
        gradientTransform="matrix(.75 0 0 .75 499.5 629.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f9ed32" />
        <stop offset={0.36} stopColor="#ee2a7b" />
        <stop offset={0.44} stopColor="#d22a8a" />
        <stop offset={0.6} stopColor="#8b2ab2" />
        <stop offset={0.83} stopColor="#1b2af0" />
        <stop offset={0.88} stopColor="#002aff" />
      </radialGradient>
      <style>{".cls-2{fill:#fff}"}</style>
    </defs>
    <title />
    <g id="_3-instagram" data-name="3-instagram">
      <rect
        width={64}
        height={64}
        rx={11.2}
        ry={11.2}
        style={{
          fill: "url(#radial-gradient)",
        }}
        transform="rotate(180 32 32)"
      />
      <path
        d="M44 56H20A12 12 0 0 1 8 44V20A12 12 0 0 1 20 8h24a12 12 0 0 1 12 12v24a12 12 0 0 1-12 12ZM20 12.8a7.21 7.21 0 0 0-7.2 7.2v24a7.21 7.21 0 0 0 7.2 7.2h24a7.21 7.21 0 0 0 7.2-7.2V20a7.21 7.21 0 0 0-7.2-7.2Z"
        className="cls-2"
      />
      <path
        d="M32 45.6A13.6 13.6 0 1 1 45.6 32 13.61 13.61 0 0 1 32 45.6Zm0-22.4a8.8 8.8 0 1 0 8.8 8.8 8.81 8.81 0 0 0-8.8-8.8Z"
        className="cls-2"
      />
      <circle cx={45.6} cy={19.2} r={2.4} className="cls-2" />
    </g>
  </svg>
);
export default Instagram;
