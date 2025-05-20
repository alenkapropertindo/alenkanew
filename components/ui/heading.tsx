interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="lg:text-3xl text-2xl font-bold tracking-tight">{title}</h2>
      <p className="text-xs lg:text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
