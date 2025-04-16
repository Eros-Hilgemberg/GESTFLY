import { Link } from "react-router";

interface ItemSidebarProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
  url: string;
}

function ItemSidebar({ children, title, subtitle, url }: ItemSidebarProps) {
  return (
    <Link to={url}>
      <div className="flex items-center rounded-2xl p-2 flex-row gap-2 m-0">
        <div>{children}</div>
        <div className=" flex flex-col">
          <h3 className="font-semibold">{title}</h3>
          <h5>{subtitle}</h5>
        </div>
      </div>
    </Link>
  );
}

export default ItemSidebar;
