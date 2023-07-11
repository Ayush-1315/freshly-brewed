import { Link } from "react-router-dom";

import home from "./home.module.css";

export const Home = () => {
  return (
    <div>
      <div className={home.background}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="493"
          height="478"
          viewBox="0 0 493 478"
          fill="none"
          className={`${home.vector1}`}
        >
          <g>
            <path
              d="M147.622 165.295C125.362 167.008 88.6689 174.593 82.7981 188.049C77.1718 201.75 102.368 220.834 124.628 254.597C146.888 288.116 165.969 336.315 175.754 326.773C185.538 317.231 185.783 250.193 222.965 216.43C260.392 182.911 334.756 182.666 342.339 174.837C349.923 167.253 290.48 151.839 253.053 150.126C215.871 148.658 200.46 160.402 188.963 164.317C177.466 167.987 169.883 163.583 147.622 165.295Z"
              fill="#6A70FC"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2_241"
              x="-68"
              y="0"
              width="561"
              height="478"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75"
                result="effect1_foregroundBlur_2_241"
              />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="278"
          height="218"
          viewBox="0 0 278 218"
          fill="none"
          className={`${home.vector}`}
        >
          <path
            d="M272.628 32.897C280.095 69.446 220.752 143.723 225.468 222.716C230.184 301.709 299.352 385.811 292.278 430.22C284.811 474.629 200.709 479.345 155.121 441.224C109.533 403.103 102.066 321.752 91.062 277.343C80.451 232.934 66.303 225.467 44.295 195.992C22.287 166.517 -7.97401 114.641 3.02999 78.092C13.641 41.15 65.517 19.142 128.397 7.74504C191.277 -3.65196 265.554 -4.04496 272.628 32.897Z"
            fill="#000AFF"
          />
        </svg>
      </div>
      <div className={home.content}>
        <div>
          <p>Don't let nerves get the best of you -</p>
          <p> practice makes perfect!</p>
        </div>
        <div>
          <p>
            Welcome to <span className={home.highlight}>LeanPrep</span>! The
            ultimate destination for honing your interview skills. Whether
            you're a fresh graduate, career changer, or seasoned professional,
            we've got you covered. Our{" "}
            <span className={home.highlight}>comprehensive library</span> of
            mock interview questions and{" "}
            <span className={home.highlight}>expert tips</span> will help you{" "}
            <span className={home.highlight}>ace any job interview.</span>{" "}
          </p>
        </div>
        <div className={home.links}> 
            <Link to="/signup"> Join our Program</Link>
            <p>Already a member? <span><Link to="/signin">Login</Link></span></p>
        </div>
      </div>
    </div>
  );
};
