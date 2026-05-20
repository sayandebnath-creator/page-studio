export default function UnsupportedSection({
  type,
}: {
  type: string
}) {
  return (
    <div className="p-4 border border-red-500 bg-red-50 text-red-600">
      Unsupported section: {type}
    </div>
  )
}