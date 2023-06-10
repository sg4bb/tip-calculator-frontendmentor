import PersonIcon from "@/components/icons/PersonIcon";

export default function Home() {
  return (
    <>
      <div className="bg-white rounded-xl p-7 flex flex-wrap space-x-10">
        <section className="flex flex-col min-w-[300px] mt-3 space-y-10">
          <div>
            <h2 className="text-xs text-grayish-cyan">Bill</h2>

            <div className="flex items-center justify-around px-3 mt-2">
              <h2 className="text-dark-grayish-cyan opacity-40 flex-grow">$</h2>

              <h2 className="text-very-dark-cyan">142.55</h2>
            </div>
          </div>

          <div>
            <h2 className="text-xs text-grayish-cyan">Select Tip %</h2>

            <div className="mt-4 grid grid-cols-3 grid-rows-2 items-center w-full justify-around gap-3 text-[19px]">
              <button className="bg-very-dark-cyan text-white text-center py-2 w-full  rounded-md">
                5%
              </button>

              <button className="bg-very-dark-cyan text-white text-center py-2 w-full  rounded-md">
                10%
              </button>

              <button className="bg-strong-cyan text-very-dark-cyan text-center py-2 w-full  rounded-md">
                15%
              </button>

              <button className="bg-very-dark-cyan text-white text-center py-2 w-full  rounded-md">
                25%
              </button>

              <button className="bg-very-dark-cyan text-white text-center py-2 w-full  rounded-md">
                50%
              </button>

              <button className="text-grayish-cyan bg-white text-center py-2 w-full  rounded-md">
                Custom
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xs text-grayish-cyan">Number of People</h2>

            <div className="flex items-center justify-around px-3 mt-2">
              <span className="flex-grow">
                <PersonIcon />
              </span>
              <h2 className="text-very-dark-cyan">5</h2>
              <span></span>
            </div>
          </div>
        </section>

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

          <div className="flex justify-end">
            <button className="w-full bg-strong-cyan hover:bg-grayish-cyan-light duration-700 text-very-dark-cyan text-center uppercase text-sm py-3 rounded-md mt-32">
              Reset
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
