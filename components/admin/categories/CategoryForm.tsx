"use client";

import { useState } from "react";

export default function CategoryForm() {

  const [name, setName] = useState("");

  const [slug, setSlug] = useState("");

  const [description, setDescription] = useState("");

  return (

    <form className="space-y-6">

      <div>

        <label className="block mb-2 text-white font-medium">

          Category Name

        </label>

        <input

          value={name}

          onChange={(e)=>setName(e.target.value)}

          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"

          placeholder="SSC"

        />

      </div>

      <div>

        <label className="block mb-2 text-white font-medium">

          Slug

        </label>

        <input

          value={slug}

          onChange={(e)=>setSlug(e.target.value)}

          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"

          placeholder="ssc"

        />

      </div>

      <div>

        <label className="block mb-2 text-white font-medium">

          Description

        </label>

        <textarea

          value={description}

          onChange={(e)=>setDescription(e.target.value)}

          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"

          rows={4}

        />

      </div>

      <button

        type="submit"

        className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"

      >

        Save Category

      </button>

    </form>

  );

}