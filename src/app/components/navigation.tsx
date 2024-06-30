import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

type NavigationProps = {
  items: { title: string; href: string }[];
  className?: string;
};

const Navigation: React.FC<NavigationProps> = ({ items, className }) => {
  const { locale } = useParams();
  const pathName = usePathname();
  const t = useTranslations("NavigationLinks");

  return (
    <nav className="flex">
      <ul className="flex border m-5 w-full rounded-[30px]">
        {items?.map((item, index) => (
          <li key={index} className="flex-1 w-48">
            <Link
              href={`/${locale}/${item.href}`}
              style={{
                height: "70px",
              }}
              className={`text-center flex items-center justify-center h-70 border-white uppercase rounded-[30px] hover:border-gray-200 hover:bg-gray-200 py-2 h-full w-full ${
                pathName === `/${locale}${item.href}`
                  ? "bg-black text-white"
                  : ""
              }`}
            >
              {`${t(`${item.title}`)}`}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
