function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          {/* не надо указывать папку из которой доставать */}
          <img src="/img/logo.png"/> 
          <div className="headerInfo">
            <h3>Sneaker store react</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            <svg />
            <span>1205 руб.</span>
          </li>

          <li>
            <svg />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        ......
      </div>
    </div>
  );
}

export default App; 
