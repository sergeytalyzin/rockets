import React from "react";

import s from "./style.module.sass";

export type SputnikImgProps = {
  style?: React.CSSProperties,
}

export const SputnikImg = React.memo(React.forwardRef<SVGSVGElement, SputnikImgProps>(({ style }, ref) => {
  return (
    <svg ref={ref} style={style} className={s.sputnik} viewBox="0 0 42 60">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="test-task" transform="translate(-379.000000, -314.000000)">
          <g id="sputniks" transform="translate(379.000000, 134.000000)">
            <g id="sputnik" transform="translate(0.000000, 180.000000)">
              <polygon id="Fill-1" fill="#131313" points="19.2094811 28 18 25.6307364 18.7892377 25 20 27.3692636"></polygon>
              <polygon id="Fill-2" fill="#00ACED" points="0 4.67141404 7.25285063 0 22 23.328586 14.7471494 28"></polygon>
              <polygon id="Fill-3" fill="#FFFFFF" points="18.9017744 26 4 3.06224207 4.0982256 3 19 25.939314"></polygon>
              <polygon id="Fill-4" fill="#FFFFFF" points="13.0600086 25 13 24.8971125 19.9399914 20 20 20.101228"></polygon>
              <polygon id="Fill-5" fill="#FFFFFF" points="10.0600086 21 10 20.8971466 16.9399914 16 17 16.1028534"></polygon>
              <polygon id="Fill-6" fill="#FFFFFF" points="8.06000857 17 8 16.8971125 14.9414916 12 15 12.101228"></polygon>
              <polygon id="Fill-7" fill="#FFFFFF" points="5.06000857 12 5 11.8971125 11.9399914 7 12 7.10122801"></polygon>
              <polygon id="Fill-8" fill="#FFFFFF" points="2.0585209 8 2 7.89711251 8.9414791 3 9 3.10122801"></polygon>
              <polygon id="Fill-9" fill="#131313" points="23.2094811 35 22 32.6307364 22.7892377 32 24 34.3692636"></polygon>
              <polygon id="Fill-10" fill="#00ACED" points="34.7471494 60 42 55.3283219 27.2528506 32 20 36.6700955"></polygon>
              <polygon id="Fill-11" fill="#FFFFFF" points="38.9017744 57 24 34.060686 24.0982256 34 39 56.9377579"></polygon>
              <polygon id="Fill-12" fill="#FFFFFF" points="22.0585209 40 22 39.8971125 28.9414791 35 29 35.101228"></polygon>
              <polygon id="Fill-13" fill="#FFFFFF" points="25.0600086 44 25 43.8971466 31.9399914 39 32 39.1028534"></polygon>
              <polygon id="Fill-14" fill="#FFFFFF" points="28.0600086 48 28 47.8971466 34.9399914 43 35 43.1028534"></polygon>
              <polygon id="Fill-15" fill="#FFFFFF" points="31.0585209 53 31 52.8971125 37.9414791 48 38 48.101228"></polygon>
              <polygon id="Fill-16" fill="#FFFFFF" points="34.0600086 57 34 56.8971125 40.9399914 52 41 52.101228"></polygon>
              <polygon id="Fill-17" fill="#FAFFFF" points="14.8695842 38 11 31.9678493 25.1304158 23 29 29.0321507"></polygon>
              <polygon id="Fill-18" fill="#00ACED" points="23.9550922 32 20 26.2162855 22.0449078 25 26 30.7837145"></polygon>
              <polygon id="Fill-19" fill="#FAFFFF" points="28.3369703 28 26 24.3360406 29.6630297 22 32 25.6624365"></polygon>
              <polygon id="Fill-20" fill="#FAFFFF" points="13.5277892 38 11 33.9576613 12.4722108 33 15 37.0406586"></polygon>
              <g id="Group-45" transform="translate(5.000000, 23.000000)">
                <path d="M0.465,10.7113846 C2.7790625,9.256 5.855625,9.92523077 7.3321875,12.2052308 C8.80875,14.4852308 8.130625,17.5113846 5.815,18.9667692" id="Fill-21" fill="#FAFFFF"></path>
                <polygon id="Fill-23" fill="#131313" points="23.3004688 4.77692308 20.9020313 1.07538462 21.4082813 0.758461538 23.8067188 4.45846154"></polygon>
                <polygon id="Fill-25" fill="#131313" points="8.748125 13.9189231 6.3496875 10.2189231 6.8309375 9.91584615 9.229375 13.6158462"></polygon>
                <path d="M18.9845312,7.77723077 C18.7798438,7.90492308 18.5095313,7.84646154 18.3798437,7.64646154 C18.2485938,7.44492308 18.3095313,7.17876923 18.5126563,7.04953846 C18.7173438,6.92184615 18.9876563,6.98030769 19.1173438,7.18184615 C19.2485938,7.38338462 19.1876562,7.64953846 18.9845312,7.77723077" id="Fill-27" fill="#FF5340"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}));