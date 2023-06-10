export default function Home() {
  return (
    <>
      <div className="bg-white rounded-xl p-5 flex flex-wrap space-x-4">
        <h2 className="text-grayish-cyan">Bill section</h2>

        <section className="text-white bg-very-dark-cyan grid-rows-3 p-8 rounded-xl">
          <div className="flex space-x-20 items-center">
            <article className="flex flex-col">
              <h2 className="text-xs">Tip Amount</h2>
              <h2 className="text-[0.7rem] opacity-30">/ person</h2>
            </article>
            <h2 className="text-4xl text-strong-cyan">$4.27</h2>
          </div>

          <div className="flex space-x-20 items-center mt-10">
            <article className="flex flex-col">
              <h2 className="text-xs">Total</h2>
              <h2 className="text-[0.7rem] opacity-30">/ person</h2>
            </article>
            <h2 className="text-4xl text-strong-cyan">$32.79</h2>
          </div>

          <button className="w-full bg-strong-cyan hover:bg-grayish-cyan-light duration-700 text-very-dark-cyan text-center uppercase text-sm py-3 rounded-md mt-24">
            Reset
          </button>
        </section>
      </div>
    </>
  );
}
