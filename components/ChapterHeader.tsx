type Props = {
  title: string;
  subtitle?: string;
};

export default function ChapterHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-blue-700">
        📘 {title}
      </h1>

      {subtitle && (
        <p className="mt-3 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}