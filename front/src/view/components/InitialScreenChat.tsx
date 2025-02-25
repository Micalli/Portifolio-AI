import AIRobot from "../../assets/AI-Robot-Illustrated.svg";

export function InitialScreenChat() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
      <div className="bg-slate-50 rounded-full">
        <img src={AIRobot} alt="" className="w-25 h-22" />
      </div>
      <p className="mt-4 text-lg font-medium text-white">
        Olá 👋, eu sou seu assistente de IA.
      </p>
      <p className="text-gray-500 text-sm ">Como posso te ajudar hoje?</p>
    </div>
  );
}
