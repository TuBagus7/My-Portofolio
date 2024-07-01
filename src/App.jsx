// App.js
import myPhoto from "../public/img/myprofile.jpg";
import mySchem from "../public/img/schem.png";
import project2 from "../public/img/blok_diagram.drawio.png";

function App() {
  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black min-h-screen">
      <header className="bg-black shadow">
        <div className="container mx-auto p-4 flex justify-start">
          <h1 className="text-3xl font-bold text-white">My Portfolio</h1>
        </div>
      </header>

      <main className="container mx-auto p-4 text-white">
        <section id="about" className="my-8">
          <img
            src={myPhoto}
            alt="foto"
            className="w-32 h-32 rounded-full mx-auto w-64 h-64 rounded-full object-cover"
          />
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            sapiente expedita neque, aliquid maiores exercitationem distinctio
            rem at velit officiis. Vitae eos itaque in iure totam dolorem omnis
            rerum sit. Consequatur ullam sapiente omnis earum minima accusamus
            fugit laborum eveniet doloribus quas, rerum aliquid corrupti totam
            architecto nostrum dignissimos quod. Eos doloribus dolore quo natus
            consequatur expedita ab consectetur voluptatum perferendis laborum
            corporis ullam veniam rem, commodi harum dolores laudantium
            dignissimos quae? Ullam, provident. Quod, suscipit modi! Sapiente
            sequi in delectus impedit nisi similique consequatur quo cupiditate
            itaque eius alias, quibusdam exercitationem, libero excepturi cum
            amet culpa, vitae aperiam facilis.
          </p>
        </section>

        <section id="projects" className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800 shadow p-4 rounded">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <img src={mySchem} alt="schem" />
              <p className="text-gray-300">Description of Project 1.</p>
            </div>
            <div className="bg-gray-800 shadow p-4 rounded">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <img src={project2} alt="Project2" />
              <p className="text-gray-300">Description of Project 2.</p>
            </div>
            <div className="bg-gray-800 shadow p-4 rounded">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p className="text-gray-300">Description of Project 3.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form className="bg-gray-800 shadow p-4 rounded">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
