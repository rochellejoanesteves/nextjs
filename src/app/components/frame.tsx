import Image, { StaticImageData } from "next/image";

interface FrameProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  imageUrl: StaticImageData;
  action?: string; 
  goto?: string; 
}

const Frame: React.FC<FrameProps> = ({
  title,
  imageUrl,
  action,
  goto,
  ...rest
}) => (
  <div
    {...rest}
    className={`each-frame border-box flex-none h-full ${rest.className || ""}`}
    title={title}
  >
    <div className="flex items-center justify-center m-2.5">
      <div className="w-full flex p-2.5">
        <Image src={imageUrl} alt={title} width={300}/>
      </div>
    </div>
  </div>
);

export default Frame;
