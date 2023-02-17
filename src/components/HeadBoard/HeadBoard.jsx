import './styles.css'

const HeadBoard = () => {
  return (
    <section className="head-board__container">
      <article className="head-board__info">
        <h1 className="head-board__title">Big Comeback</h1>
        <p>Nullam porta, eros id aliquam pulvinar, urna ex mattis eros, quis vestibulum urna turpis et risus. Mauris porttitor risus faucibus, auctor arcu a tincidunt nib...</p>
        <button className="head-board__watch-btn">WATCH NOW</button>
        <button className="head-board__play-btn">+ PLAYLIST</button>
      </article>
      <article className="head-board__triangle-cont">
        <div className="head-board__triangle">
          <button className="head-board__traingle-btn"><ion-icon name="caret-forward-outline" /></button>
        </div>
      </article>
    </section>
  )
}

export default HeadBoard;
