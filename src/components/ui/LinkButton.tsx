import Link from "next/link";

const LinkButton = ({ href, linkName }: { href: string; linkName: string }) => {
  return (
    <Link
      href={href}
      className="bg-slate-800 hover:bg-green-dark px-4 py-2 rounded-xl transition-color duration-300 uppercase"
    >
      <span>{linkName}</span>
    </Link>
  );
};

export default LinkButton;
