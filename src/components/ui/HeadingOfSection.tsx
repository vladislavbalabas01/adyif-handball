import Link from "next/link";

export const LinkHeadingOfSection = ({
  text,
  href = "/",
}: {
  text: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="max-w-7xl container mb-6 flex items-center justify-between"
    >
      <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white">
        <span>{text}</span>
      </h2>
    </Link>
  );
};

export const HeadingOfSection = ({ text }: { text: React.ReactNode }) => {
  return (
    <div className="max-w-7xl container mb-6 flex items-center justify-between">
      <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white">
        <span>{text}</span>
      </h2>
    </div>
  );
};
