function Button({ icon, text, type }) {
  return (
    <button
      type={type}
      className="flex items-center justify-center gap-2 bg-red py-3.5 w-full text-white rounded-[.3125rem] hover:bg-blue-600 transition-all duration-300 ease-in-out"
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
