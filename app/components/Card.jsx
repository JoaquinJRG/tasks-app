export function Card({ data, handleDragging }) {

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text', `${data.id},${data.title}`)
    handleDragging(true)
  }
  const handleDragEnd = () => handleDragging(false)

  return (
    <div
      className="p-3 bg-white dark:bg-[#2f2b3a] rounded-md shadow-sm cursor-grab"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p>{data.title}</p>
    </div>
  );
} 