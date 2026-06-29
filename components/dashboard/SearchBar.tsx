import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="mt-8">
      <div className="relative">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />

        <Input
          placeholder="Search chapters, notes, videos..."
          className="h-14 rounded-2xl border-slate-700 bg-slate-900 pl-12 text-white placeholder:text-slate-400 focus-visible:ring-blue-500"
        />

      </div>
    </div>
  );
}