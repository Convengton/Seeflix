import Homecard from "./Homecard";

export default function Homelist({items }) {

    return(
        <section className="media-list">
      <div className="media-list__header">
        <h3>Popular movies</h3>
      </div>
      <div className="media-list__grid">
        {items.map((item) => (
                    <Homecard key={item.id} {...item} />
                ))}
      </div>
    </section>
    )
}

