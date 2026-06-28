export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

      <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">500+</h2>
        <p className="text-gray-600 mt-2">Notes</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
        <h2 className="text-3xl font-bold text-green-600">1000+</h2>
        <p className="text-gray-600 mt-2">Videos</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
        <h2 className="text-3xl font-bold text-red-600">5000+</h2>
        <p className="text-gray-600 mt-2">Questions</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
        <h2 className="text-3xl font-bold text-purple-600">50K+</h2>
        <p className="text-gray-600 mt-2">Students</p>
      </div>

    </div>
  );
}