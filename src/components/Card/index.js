import "./Card.css";
// function Card({ title, par }) {
//   return (
//     <di className="Card">
//       <h6>{title}</h6>
//       <p>{par}</p>
//       <button>Devamı</button>
//     </di>
//   );
// }
//Arrow fonksiyon yukardakinin aynısı
const Card = ({ title, par, lesson, index }) => (
  <div className="Card">
    <h6>{title}</h6>
    <b>{index}</b>
    <p>{par}</p>
    {lesson > 20 && index === 0 && <div>İleri düzey</div>}

    <button>Devamı</button>
  </div>
);
export default Card;
