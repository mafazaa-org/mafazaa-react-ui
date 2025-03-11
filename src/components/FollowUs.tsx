"use client";
import Link from "next/link";
import Image from "next/image";
function FollowUs({ links, img1, img2 }) {
  return (
    <section
      className="bg-gradient-to-r from-dark-one to-dark-two text-bright-one text-center rounded-xl
          mx-4 md:mx-8 lg:mx-32 my-16 py-10 relative  flex flex-col
          after:content-['']
          after:absolute
          after:left-1/4
          after:-bottom-10
          lg:after:-bottom-20
          after:w-1/2
          after:h-[0.5px]
          after:block
        after:bg-black"
    >
      <Image
        src={img1}
        alt="icon"
        width={325}
        height={240}
        className="absolute hidden md:block left-0 top-0 w-fit md:h-full"
      />
      <h1 className="mb-6 text-2xl lg:text-5xl font-bold">
        لا تدع المهم يفوتك!
      </h1>

      <p className="mb-16 text-base lg:text-2xl font-medium">
        تابعنا على صفحاتنا لتصلك مشاريعنا و منتجاتنا الجديدة بإذن الله
      </p>
      <ul className="mx-auto flex flex-row-reverse items-center justify-center gap-6 lg:gap-16">
        {links?.socialLinks?.map((social: any, index: any) => (
          <li key={index}>
            <Link href={social?.href} target="_blank">
              <Image
                src={social?.src}
                alt={social?.text}
                width={40}
                height={40}
                className="w-6 lg:w-10"
              />
            </Link>
          </li>
        ))}
      </ul>
      <Image
        src={img2}
        alt="icon"
        width={325}
        height={240}
        className="absolute hidden md:block right-0 bottom-0 w-fit md:h-full"
      />
    </section>
  );
  // );
}

export default FollowUs;
