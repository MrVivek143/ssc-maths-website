interface PageHeaderProps {
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function PageHeader({
  title,
  description,
  buttonText,
  onClick,
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">

      <div>

        <h1 className="text-3xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-slate-400">
          {description}
        </p>

      </div>

      {buttonText && (
        <button
          onClick={onClick}
          className="rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          {buttonText}
        </button>
      )}

    </div>
  );
}