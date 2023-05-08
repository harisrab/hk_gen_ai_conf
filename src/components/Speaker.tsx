import Image from "next/image";
import Link from "next/link";

const Speaker = ({ name, linkedin, label, img }: any) => {
  return (
    <Link href={linkedin}>
      <li className="hover:opacity-60 duration-150 hover:cursor-pointer">
        <div className="relative w-[300px] h-[400px]">
          <Image
            src={img}
            alt=""
            fill
            style={{
              objectPosition: "center",
              objectFit: "cover",
            }}
          ></Image>
        </div>
        <p className="flex items-center gap-4 text-[20px] mt-2">
          <svg
            width="19"
            height="19"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_46_9781)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3022 0H1.69785C1.24755 0 0.815696 0.17888 0.497288 0.497288C0.17888 0.815696 0 1.24755 0 1.69785V21.3022C0 21.7524 0.17888 22.1843 0.497288 22.5027C0.815696 22.8211 1.24755 23 1.69785 23H21.3022C21.7524 23 22.1843 22.8211 22.5027 22.5027C22.8211 22.1843 23 21.7524 23 21.3022V1.69785C23 1.24755 22.8211 0.815696 22.5027 0.497288C22.1843 0.17888 21.7524 0 21.3022 0ZM6.85528 19.5931H3.39729V8.60903H6.85528V19.5931ZM5.12389 7.08688C4.73164 7.08467 4.34884 6.96631 4.02379 6.74675C3.69874 6.52719 3.44601 6.21626 3.29751 5.8532C3.149 5.49015 3.11137 5.09123 3.18936 4.70681C3.26736 4.32239 3.45748 3.96968 3.73573 3.69321C4.01399 3.41673 4.36791 3.22888 4.75282 3.15336C5.13774 3.07784 5.5364 3.11803 5.8985 3.26886C6.26059 3.41969 6.56989 3.67441 6.78736 4.00086C7.00483 4.32731 7.12073 4.71087 7.12042 5.10313C7.12412 5.36574 7.07491 5.62641 6.97572 5.8696C6.87653 6.1128 6.7294 6.33353 6.54309 6.51865C6.35678 6.70377 6.13511 6.84948 5.89128 6.9471C5.64746 7.04473 5.38648 7.09226 5.12389 7.08688ZM19.6011 19.6027H16.1447V13.6019C16.1447 11.8322 15.3924 11.286 14.4213 11.286C13.3959 11.286 12.3897 12.059 12.3897 13.6467V19.6027H8.93167V8.61701H12.2571V10.1392H12.3018C12.6356 9.46354 13.8048 8.30875 15.5889 8.30875C17.5183 8.30875 19.6027 9.45396 19.6027 12.8081L19.6011 19.6027Z"
                fill="#565656"
              />
            </g>
            <defs>
              <clipPath id="clip0_46_9781">
                <rect width="23" height="23" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {` ${name}`}
        </p>
        <p className="text-white/[0.4] mb-10">{label}</p>
      </li>
    </Link>
  );
};

export default Speaker;
