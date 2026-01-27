export default function Container({ title, total, icon, color}) {
  return(
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-lg font-mono text-gray-600 mb-1">{title}</h2>
      <div className="flex items-center justify-between">
        <p className="text-2xl">{total}</p>
        <span className={`p-2.5 ${color} rounded-full text-white`}>{icon}</span>
      </div>
    </div>
  )
}