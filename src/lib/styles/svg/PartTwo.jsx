import React from 'react';

const PartTwo = () => {
  return (
    <svg width="827" height="702">
      <defs>
        <filter
          id="a"
          x="0"
          y="0"
          width="567"
          height="360"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feFlood floodOpacity=".16" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="b"
          x="462"
          y="118"
          width="365"
          height="584"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2.5" result="blur-2" />
          <feFlood floodOpacity=".16" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g filter="url(#a)">
        <rect
          data-name="사각형 299"
          width="552"
          height="345"
          rx="10"
          transform="translate(7.5 6.5)"
          fill="#f1f3f9"
        />
      </g>
      <rect
        data-name="사각형 300"
        width="506"
        height="299"
        rx="10"
        transform="translate(30.5 29.5)"
        fill="#f9fbfe"
      />
      <rect
        data-name="사각형 301"
        width="380"
        height="276"
        rx="10"
        transform="translate(41.5 40.5)"
        fill="#8a85ec"
      />
      <rect
        data-name="사각형 302"
        width="93"
        height="42"
        rx="10"
        transform="translate(432.5 40.5)"
        fill="#8a85ec"
      />
      <rect
        data-name="사각형 303"
        width="93"
        height="223"
        rx="10"
        transform="translate(432.5 93.5)"
        fill="#8a85ec"
      />
      <g filter="url(#b)">
        <rect
          data-name="사각형 304"
          width="350"
          height="569"
          rx="10"
          transform="translate(469.5 124.5)"
          fill="#f1f3f9"
        />
      </g>
      <path
        data-name="사각형 305"
        d="M469.5 626.5h350v57a10 10 0 0 1-10 10h-330a10 10 0 0 1-10-10v-57Z"
        fill="#fcfdfe"
      />
      <path d="m778.51 670.5 20.99-9-20.99-9-.01 7 15 2-15 2Z" fill="#17090e" />
      <text
        data-name="질문을 입력해주세요"
        transform="translate(489.5 666.5)"
        fill="#eaeaea"
        fontSize="16"
        fontFamily="GmarketSansTTFMedium, Gmarket Sans TTF"
      >
        <tspan x="0" y="0">
          질문을 입력해주세요
        </tspan>
      </text>
      <rect
        data-name="사각형 198"
        width="310"
        height="125"
        rx="20"
        transform="translate(489.5 184.5)"
        fill="#fcfdfe"
      />
      <text
        transform="translate(514.5 158.5)"
        fill="#17090e"
        fontSize="16"
        fontFamily="GmarketSansTTFBold, Gmarket Sans TTF"
      >
        <tspan x="0" y="0">
          Paul
        </tspan>
      </text>
      <path
        d="M504.5 294.5h3.27v-9.6h-3.27Zm18-8.8a1.62 1.62 0 0 0-1.64-1.6h-5.16l.78-3.66.02-.25a1.2 1.2 0 0 0-.36-.85l-.87-.84-5.38 5.27a1.55 1.55 0 0 0-.48 1.13v8a1.62 1.62 0 0 0 1.63 1.6h7.37a1.63 1.63 0 0 0 1.5-.98l2.48-5.64a1.55 1.55 0 0 0 .11-.58v-1.53Z"
        fill="#8a85ec"
      />
      <text
        data-name="13"
        transform="translate(532.5 291.5)"
        fill="#1c0f12"
        fontSize="16"
        fontFamily="GmarketSansTTFMedium, Gmarket Sans TTF"
      >
        <tspan x="0" y="0">
          13
        </tspan>
      </text>
      <g data-name="그룹 227" transform="translate(-984.5 -122.5)">
        <rect
          data-name="사각형 205"
          width="100"
          height="30"
          rx="15"
          transform="translate(1674 390)"
          fill="#8a85ec"
        />
        <text
          data-name="답변 보기"
          transform="translate(1691 410)"
          fill="#fcfdfe"
          fontSize="16"
          fontFamily="GmarketSansTTFMedium, Gmarket Sans TTF"
        >
          <tspan x="0" y="0">
            답변 보기
          </tspan>
        </text>
      </g>
      <text
        data-name="35 : 08"
        transform="translate(504.5 212.5)"
        fill="#8a85ec"
        fontSize="16"
        fontFamily="GmarketSansTTFBold, Gmarket Sans TTF"
      >
        <tspan x="0" y="0">
          35 : 08
        </tspan>
      </text>
      <text
        data-name="이 부분에서 왜 while문을 쓰는지 모르겠어요."
        transform="translate(504.5 242.5)"
        fill="#313131"
        fontSize="16"
        fontFamily="GmarketSansTTFMedium, Gmarket Sans TTF"
      >
        <tspan x="0" y="0">
          이 부분에서 왜 while문을 쓰는지
        </tspan>
        <tspan x="0" y="21">
          모르겠어요.
        </tspan>
      </text>
      <circle
        data-name="타원 16"
        cx="10"
        cy="10"
        r="10"
        transform="translate(489.5 143.5)"
        fill="#b5b8bf"
      />
    </svg>
  );
};

export default PartTwo;
