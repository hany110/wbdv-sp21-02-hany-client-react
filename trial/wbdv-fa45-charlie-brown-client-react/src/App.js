function App() {
let gu = {
    si: 'da',
    cf: 'qe'
}
let uj = {
    cf: 'do',
    co: 'db',
    ...gu,
}
gu = {
    ...uj,
    cf: 'wh',
    co: 'nd'
}
  return (
    <div className="App">
      {gu.si}
    </div>
  );
}

export default App;
