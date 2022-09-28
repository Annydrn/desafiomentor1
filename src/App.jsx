import './App.css'

function App() {
  return (
    <div className="App">
      <img className='img_perfume' src="../public/images/image-product-mobile.jpg" alt="" />
        <div className='information'>
        <h1 className="title">PERFUME</h1>
        <h2 className="name_perfume">Gabrielle Essence Eau De Parfum</h2>
        <p className="description">
          A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
        </p>
        <section className="price_art">
          <h3 className="sale">$149.99</h3>
          <h4 className="price">$169.99</h4>
        </section>
        <button className="btn">
          <img className="btn_icon" src="" alt="" />
          <p className="text_btn">Add to Cart</p>
        
        </button>   
          </div>
    </div>
  );
}

export default App
