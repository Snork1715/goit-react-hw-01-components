import PropTypes from "prop-types";

export default function StatisticsItem(props) {
  const { title, stats } = props;

  return (
    <div className="statistica_container">
      <section className="statistics">
        {title && <h2 className="stat_title">{title}</h2>}
        <ul className="stat_list">
          {stats.map((item) => (
              <li className="stat_item" key={item.id} style={{backgroundColor:getRandomColor()}}>
              <span className="stat_label">{item.label}</span>
              <span className="stat_percentage">{item.percentage} %</span>
            </li>      
          ))}
        </ul>
      </section>
    </div>
  );
}

StatisticsItem.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape()),
};

function getRandomColor() {
    return  "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
}
