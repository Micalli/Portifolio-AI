export function TypingIndicator() {
    return (
      <div className="flex items-end my-6">
        <div className="flex items-center justify-center w-14 h-10 mx-2 bg-gray-700 rounded-xl">
          <div className="size-1.5  bg-white rounded-full animate-[bounce_1s_ease-in-out_infinite] mx-1"></div>
          <div className="size-1.5  bg-white rounded-full animate-[bounce_0.5s_ease-in-out_infinite] [animation-delay:0.15s] mx-1"></div>
          <div className="size-1.5  bg-white rounded-full animate-[bounce_1s_ease-in-out_infinite]  [animation-delay:0.3s] mx-1"></div>
        </div>
      </div>
    );
}