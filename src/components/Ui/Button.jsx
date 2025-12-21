function Button({ text }) {
  return (
    <button className="bg-red py-3.5 w-full text-inherit rounded-[.3125rem] hover:bg-white hover:text-black transition-all duration-200 ease-linear">
      {text}
    </button>
  );
}

export default Button;
