export default function SearchBar() {
  return (
    <div className="mt-8">
      <input
        type="text"
        placeholder="🔍 Search Chapters, Notes, Videos..."
        className="w-full rounded-2xl border border-gray-300 px-6 py-4 text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}