const Loading = () => {
  return (
    <div class="flex items-center justify-center bg-transparent">
      <div
        class="w-6 h-6 border-2 border-t-0 rounded-full border-yellow-500"
        style={{ animation: 'spin 0.5s linear 0s infinite' }}></div>
    </div>
  )
}

export default Loading
