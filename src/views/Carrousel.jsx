import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
  return (
    <Carousel>

      <Carousel.Item>
        <img src='carne1.jpg' className="d-block w-100"></img>
        <Carousel.Caption>
          <h3>EL ASADOR </h3>
          <h4>"Tradición en cada bocado, pasión en cada llama."
</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='carne1.jpg' className="d-block w-100"></img>
        <Carousel.Caption>
          <h3>EL ASADOR</h3>
          <h4>"El Asador: donde las carnes de primer nivel son nuestra firma gastronómica."</h4>
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
  );
}

export default Carrousel;