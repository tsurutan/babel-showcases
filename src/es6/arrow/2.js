function local() {
  const hoge = () => { this }

  function hoge2() {
    this
  }
}