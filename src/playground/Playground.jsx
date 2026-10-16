```jsx
import Header from "./Header";
import Perfil from "./Perfil";
import Tarjeta from "./Tarjeta";
import DatoCurioso from "./DatoCurioso";
import Footer from "./Footer";

function Playground() {
  return (
    <>
      <Header />
      <Perfil />

      <section className="container my-4">
        <div className="row justify-content-center">
          <Tarjeta />
        </div>
      </section>

      <DatoCurioso />
      <Footer />
    </>
  );
}

export default Playground;
```