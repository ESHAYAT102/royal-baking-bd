import "../index.css";

export default function Stats({ children }) {
  return (
    <div className="p-10 bg-gray mx-4 lg:mx-32 my-10 rounded-4xl border-2 border-[#a1a1a150]">
      {children}
    </div>
  );
}
